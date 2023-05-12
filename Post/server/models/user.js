const con = require("./db_connect");


async function createTable() {
let sql=`CREATE TABLE IF NOT EXISTS users (
  userID INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  dateOfbirth DATE,
  gender CHAR(6) NOT NULL,
  contactNumber int(10) NOT NULL UNIQUE,
  CONSTRAINT userPK PRIMARY KEY(userID)
); `
await con.query(sql);
}
createTable();

async function register(user) {
let cUser = await getUser(user);

const sql = `INSERT INTO users (username,firstname,lastname,password,dateOfbirth,gender,contactNumber)
  VALUES ("${user.username}","${user.firstname}", "${user.lastname}","${user.password}","${user.dateOfbirth}","${user.gender}","${user.contactNumber}");
`
await con.query(sql);
return await login(user);
}
async function getUser(user) {
  let sql;
  
  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE username= "${user.username}"
  `;
  }
  return await con.query(sql);  
  }


async function login(user) { 
  let cUser = await getUser(user); 

if(!cUser[0]) throw Error("Username not found");
if(cUser[0].password !== user.password) throw Error("Password incorrect");

return cUser[0];
}

async function editUser(user) {
  let sql = `UPDATE users 
    SET username = "${user.username}"
    WHERE userID = ${user.userID}
  `;
  
  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
  }

async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
  }

  async function getAllUsers() {
    const sql = `SELECT * FROM users;`;
    let users = await con.query(sql);
    console.log(users)
    return users
  }


  

module.exports = {login, register, editUser, deleteUser, getAllUsers};


