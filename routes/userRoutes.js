import express from "express"
import usercontrol from "../controllers/usercontrol.js"

const router = express.Router()
// check for session
router.get("/", usercontrol.user_index)

// logout
router.get("/logout", usercontrol.user_out)
  
// login
router.post("/login", usercontrol.user_details)

// register user
router.post("/register", usercontrol.user_post)


export default router

