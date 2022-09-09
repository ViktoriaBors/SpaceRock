import express from "express";
import { MongoClient, ServerApiVersion  } from "mongodb";
import datarouter from "./routes/dataRoutes.js"
import userrouter from "./routes/userRoutes.js"
import cookieParser from "cookie-parser";
import fs from "fs"
import bcrypt from "bcrypt"
import multer from "multer"

const uri = "mongodb+srv://vbp:spacerockApp1@spacerock-db.zvbvmp3.mongodb.net/spacerock?retryWrites=true&w=majority" || process.env.MONGODB_URI ;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
let db

const app = express();
const port = process.env.PORT || 8080;

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
  db = client.db("spacerock");
  app.listen(port,()=>{
    console.log(`App listening on port ${port}`)})
  }).catch(err=>console.log(err))

