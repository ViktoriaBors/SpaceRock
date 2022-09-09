import express from "express";
import { MongoClient } from "mongodb";
import datarouter from "./routes/dataRoutes.js"
import userrouter from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";
import fs from "fs"
import bcrypt from "bcrypt"
import multer from "multer"

const client = new MongoClient("mongodb://localhost:27017");
let db

const app = express();
const port = 8080;

app.use(express.static("public"))
app.use(express.static("views", {
  extensions: ['html', 'htm']}))
  
app.use(express.json())
app.use(cookieParser());

app.get('/', (req, res) => {
  res.redirect("")
})

// data routes
app.use("/data",datarouter)

// user routes
app.use("/user", userrouter)

client.connect().then(()=>{
  db = client.db("spacerockproject");
  app.listen(port,()=>{
    console.log(`App listening on port ${port}`)})
  }).catch(err=>console.log(err))

