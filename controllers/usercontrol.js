// user_post - new user registration
// user_details - login
// user_index check user has a session or not

import { MongoClient, MongoNotConnectedError, ObjectId } from "mongodb";
import { v4 as uuid4 } from "uuid";
import bcrypt from "bcrypt"


const client = new MongoClient("mongodb://localhost:27017");
const database = client.db("spacerockproject").collection("users")
const session = client.db("spacerockproject").collection("session")

const user_post = async (req,res)=>{
  console.log("new user")
  let cursor = await database.findOne({email: req.body.email})
  if(cursor){
    res.status(401)
    res.send("Already existing user")
    return
  } else {
    const sessionId = uuid4(); 
    session.insertOne({"session": sessionId, "expires":new Date(Date.now()+3600000), "email":req.body.email})
    res.cookie("session", sessionId, {expires: new Date(Date.now()+3600000)});
    const hash = bcrypt.hashSync(req.body.password, 10);
    database.insertOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash
    }).then(result => res.send(result))
  }
}

const user_details = async (req, res) => {
  console.log("login")
  let cursor = await database.findOne({ email: req.body.email })
  if (bcrypt.compareSync(req.body.password, cursor.password)) {
    const sessionCheck = await session.findOne({ email: req.body.email })
    if (sessionCheck == null) { // no session
      const sessionId = uuid4()
      session.insertOne({ "session": sessionId, "expires": new Date(Date.now() + 3600000), "email": req.body.email })
      res.cookie("session", sessionId, { expires: new Date(Date.now() + 3600000) });
      res.send("Login is successful")
    } else if (sessionCheck.expires <= new Date(Date.now())) { // if session is  expired - give new cookie, delete old one
    session.deleteOne({ email: req.body.email })
    const sessionId = uuid4()
    session.insertOne({ "session": sessionId, "expires": new Date(Date.now() + 3600000), "email": req.body.email })
    res.cookie("session", sessionId, { expires: new Date(Date.now() + 3600000) });
    res.send("Login is successful")
  } else if (sessionCheck.expires >= new Date(Date.now())) { // if cookie expiry date is not over - log in without giving new cookie
    res.send("Login successful")} 
}else { // if password is not a match
    res.status(401)
    res.send("Access denied")
    return
   }
} 


const user_index = async (req, res)=>{
  console.log("checking session")
  const sessionId = req.cookies.session;
  let cursorSession = await session.findOne({session: sessionId})
  if(cursorSession == null){
    console.log("null")
    res.status(401)
    res.send("Session expired")
  } else if (cursorSession.expires >= new Date(Date.now())) { // session is still valid - login access
    console.log("session found", cursorSession.expires,new Date(Date.now()) )
    let cursorName = await database.findOne({email : cursorSession.email})
    res.send(JSON.stringify({firstname: cursorName.firstName, lastname: cursorName.lastName, email:cursorName.email}))
} else{
  res.status(401)
  res.send("No session registered")
}
}

const user_out = async (req, res)=>{
  console.log("logging out")
  const sessionId = req.cookies.session;
  let cursorSession = await session.findOne({session: sessionId})
  if (cursorSession) {
    session.deleteOne({session: sessionId})
    res.clearCookie("session", sessionId)
    res.send("logged out")
} else{
  res.status(401)
  res.send("No session found")}
}

const usercontrol = {
    user_details,
    user_post,
    user_index,
    user_out,
  }
  
  export default usercontrol
