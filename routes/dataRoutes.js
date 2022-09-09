import express from "express"
import multer from "multer"
import datacontrol from "../controllers/datacontrol.js"


const router = express.Router()
const uploader = multer({dest: "./public/img/uploads"})

// get data from database - database.html
router.get("", datacontrol.data_index)

// get list of data to modify them - user.html
router.get("/modify", datacontrol.data_form_get)

// get detailed data from database - database.html
router.get("/:sampleid",datacontrol.data_details)
  
  
  // Add new data to database - user.html
  router.post("/", datacontrol.data_post)

  // Add img to new sample - user html
  router.post("/file",uploader.single("img"), datacontrol.data_img)
  
  
  // Update/overwrite data from database - user.html
  router.put("/:sampleid", datacontrol.data_form_update)
  
  
  // Delete data from database - user.html
  router.delete("/:sampleid",datacontrol.data_form_delete)
  
  export default router