const con = require("./db_connect");


async function createTable() {
let sql=`CREATE TABLE IF NOT EXISTS posts (
  postID INT NOT NULL AUTO_INCREMENT,
  userID INT NOT NULL,
  postMessage VARCHAR(255) NOT NULL UNIQUE,
  CONSTRAINT postPK PRIMARY KEY(postID)
  CONSTRAINT FOREIGN KEY (userID) REFERENCES users(userID)
); `
await con.query(sql);
}
createTable();

async function createPost(post) {
  

const sql = `INSERT INTO posts (userID, postMessage) VALUES ("${post.userID}","${post.posts}");
`

await con.query(sql);
return {success:"Post Added"};
}


async function getAllPosts() {
 const sql = "SELECT * FROM posts;";
 let post = await con.query(sql);
 console.log(posts)
 return posts;
}


async function getPost(post) {
  let sql;
  
  if(post.userID){
    sql = `
      SELECT * FROM posts
       WHERE userID = "${post.userID}"
    `
  }
  else {
    sql = `
      SELECT * FROM posts
       WHERE postID = "${post.postID}"
    `;
  }
  return await con.query(sql);  
}
async function deletePost(post) {
    let sql = `DELETE FROM posts
      WHERE postID = "${post.postID}"
    `
    await con.query(sql);
    }
async function editPost(post) {
  let sql = `UPDATE posts 
    SET postMessage = "${post.posts}"
    WHERE postID = ${post.postID}
  `;
  
  await con.query(sql);
  let updatedPost = await getPost(post);
  return updatedPost[0];
  }



module.exports = { getAllPosts, getPost, createPost, deletePost, editPost};