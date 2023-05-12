//const { getAllUsers } = require("../server/models/user")

let getBtn=document.getElementById("myUsers")
if(getBtn) getBtn.addEventListener('click',getAllUsers);
function getAllUsers()
{
  fetch('http://localhost:3000/users/')
  .then((res)=>res.json())
  .then((data)=>console.log(data))
  .catch((err)=>console.log(err.message))
}


const registrationForm=document.getElementById("reg-form")
const loginPage=document.getElementById("login-page")
const postPage=document.getElementById("post-page")


if(registrationForm) registrationForm.addEventListener('submit',register)
function register(e)
{
     e.preventDefault();
     let firstname = document.getElementById("firstname").value;
     let lastname = document.getElementById("lastname").value;
     let username = document.getElementById("username").value;
     let password = document.getElementById("password").value;  
     let dob=document.getElementById("dob").value;
     let gender=document.getElementById("gender").value;
     let contactnumber=document.getElementById("contactnumber").value;   
     
 class Register {
    constructor(fName,lName,uName,pass,dateOfbirth,genderOfUser,contactOfUser) {
      this.firstName=fName;
      this.lastName=lName;
      this.userName=uName;
      this.password=pass;
      this.dob=dateOfbirth;
      this.gender=genderOfUser;
      this.contactnumber=contactOfUser;

    }
   
  getUserName=function(){
  return this.userName;
  }
  
 getFirstName=function(){
  return this.firstName;
  }
  
 getLastName=function(){
  return this.lastName;
  }
  
 getPassWord=function(){
  return this.password;
  }
  getDateofBirth=function(){
    return this.dob;
  }
  getGender=function(){
    return this.gender;
  }
  getContactNumber=function(){
    return this.contactnumber;
  }
 setUserName(uName){
    this.userName=uName;
    }
 setFirstName(fName){
    this.firstName=fName;
    }
    
 setLastName(lName){
    this.lastName=lName;
    }
 setPassWord(pass){
    this.passWord=pass;
    }
 setDateofBirth(pass){
    this.dob=dateOfbirth;
      }
 setGender(pass){
    this.gender=genderOfUser;
        }
 setContactNumber(pass){
    this.contactnumber=contactOfUser
          }
 }
  let regForm = new Register(firstname,lastname,username, password,dob,gender,contactnumber);
  console.log(regForm);
}

if(loginPage) loginPage.addEventListener('submit',login)
function login(e){
    e.preventDefault();
    let userName=document.getElementById("username").value;
    let passWord=document.getElementById("password").value;
    
     class User{
      constructor(uName,pWord)
      {
         
          this.userName=uName;
          this.passWord=pWord;
      }

      getuserName()
      {
       return this.userName;
      }
      getpassWord()
      {
      return this.passWord;
      }
     setuserName(uName)
      {
      this.userName=uName;
      }
      setpassWord(pWord)
      {  
      this.passWord=pWord;
      }
     }
 
  let logform=new User(userName,passWord);
     console.log(logform);


  //    fetchData('/users/login', user, "POST")
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(err => {
  //   console.log(err.message);
  // })
}
 



if(postPage) postPage.addEventListener('submit',postpage)
function postpage(e)
{
    e.preventDefault()
   
    let posts=document.getElementById('posts').value;
   
   
    class Posts{
        constructor(post)
        {
           
            this.posts=posts;
           
        }
        getposts(){
            return this.posts;
        }
        setposts(posts){
            this.posts = posts;
        }
    }

    const postpage=new Posts(posts);
    console.log(postpage);
}


// Fetch method implementation:
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }

