import { MongoClient, ObjectId } from "mongodb";
import fs from "fs"
const client = new MongoClient("mongodb://localhost:27017");
const database = client.db("spacerockproject").collection("samples")


// data_index (all sample) 
// data_details (see more detail about a specific sample)
// data_form_get (see datas which can be modified)
// data_form_update (update a specific sample)
// data_form_delete (delete a specific sample)
// data_post (add new data)
// data_img (uploading img)

const data_index = async (req, res) => {
  console.log("get data")

  let searchWord = req.query.word
  let analogue = req.query.analogue
  let simulant = req.query.simulant
  let approved = req.query.approved
  let pending = req.query.pending
  let all = req.query.all
  let length = req.query.getlength
  let pageIndex = req.query.page
  const data = []

  let query;
  if (searchWord.length) {
    query["$text"] = { $search: searchText }
  }

  let cursor;
if(analogue == "true"){
  switch("true"){
    case approved: cursor = await database
    .find({ query, type: "analogue", status: "approved" }, { name: 1, _id: 1, url: 1 }).sort({ name: 1 })
    break;
    case pending: cursor = await database
    .find({ query, type: "analogue", status: "pending" }, { name: 1, _id: 1, url: 1 }).sort({ name: 1 })
    break;
    default: cursor = await database
    .find({ query, type: "analogue" })
    break;
  }
} else if ( simulant == "true"){
  switch("true"){
    case approved: cursor = await database
    .find({ query, type: "simulant", status: "approved" }, { name: 1, _id: 1, url: 1 }).sort({ name: 1 })
    break;
    case pending: cursor = await database
    .find({ query, type: "simulant", status: "pending" }, { name: 1, _id: 1, url: 1 }).sort({ name: 1 })
    break;
    default: cursor = await database
    .find({ query, type: "simulant" })
    break;
  }
} else if (approved == "true"){
  cursor = await database
      .find({ query, status: "approved" }, { name: 1, _id: 1, url: 1 }).sort({ name: 1 })
} else if ( pending == "true"){
  cursor = await database
      .find({ query, status: "pending" }, { name: 1, _id: 1, url: 1 }).sort({ name: 1 })
} else if (all == "true"){
  cursor = await database
      .find({ query }, { name: 1, _id: 1, url: 1 }).sort({ name: 1 })
} else {
  cursor = await database
  .find({ query }, { name: 1, _id: 1, url: 1 }).sort({ name: 1 })
}

  if (length) {
    await cursor.forEach(result => data.push(result))
    let lengthOfData = (data.length)
    res.send(JSON.stringify(lengthOfData))
  }

  if (pageIndex) {
    await cursor.skip(pageIndex * 5)
      .limit(5)
    await cursor.forEach(result => data.push(result))
    res.send(data)
  }
}

const data_details = async (req, res) => {
  console.log(req.params.sampleid, "get details of specific sample")
  const id = req.params.sampleid;
  let cursor = await database.findOne({
    _id: ObjectId(id)
  })
  if (!cursor) {
    res.status(404)
    res.send("Sample is not found")
  } else res.send(cursor)
}

const data_post = async (req, res) => {
  console.log("post new data")
  let cursor = await database.findOne({ name: req.body.name })
  if (cursor) {
    res.status(404)
    res.send("Sample is already in the database")
  } else {
    database.insertOne(req.body).then(result => res.send(result))
  }
}

const data_img = async (req,res) => {
  let cursor = await database.findOne({ name: req.body.sampleName, uploadedBy:req.body.email })
  if (!cursor) {
    res.status(404)
    console.log("delete img - no sample found")
    fs.unlinkSync(req.file.path)
    res.send("Sample is not found")
  } else if(cursor) {
    let newUrl = "." + req.file.path.slice(6,100)
    console.log("add img to sample")
    database.updateOne({ name: req.body.sampleName }, { $set: {url: newUrl}})
    res.send("uploaded img")
  } 
}

const data_form_get = async (req, res) => {
  console.log("req for see pending data")
  console.log(req.query)
  let searchWord = req.query.word
  let alphabeticOrder = req.query.alphabetic;
  let newestFirst = req.query.newest
  let email = req.query.email
  let length = req.query.getlength
  let pageIndex = req.query.page
  const data = []

  let query;
  if (searchWord.length) {
    query["$text"] = { $search: searchText }
  }

  let cursor;

  if (alphabeticOrder == "true") {
    cursor = await database
      .find({ query, status: "pending", uploadedBy : email }).sort({ name: 1 })
  } else if (newestFirst == "true") {
    cursor = await database
      .find({ query, status: "pending", uploadedBy : email }).sort({ updatedLast: -1 })
  } else {
    cursor = await database.find({ query,status: "pending", uploadedBy : email }).sort({ name: 1 })
  }

  if (length) {
    await cursor.forEach(result => data.push(result))
    let lengthOfData = (data.length)
    res.send(JSON.stringify(lengthOfData))
  }
  if (pageIndex) {
    console.log("exist")
    await cursor.skip(pageIndex * 3)
      .limit(3)
    await cursor.forEach(result => data.push(result))
    res.send(data)
  }

}

const data_form_update = async (req, res) => {
  console.log(req.params.sampleid, "put")
  const id = req.params.sampleid;
  const newUpdatedData = req.body;
  let cursor = await database.findOne({
    _id: ObjectId(id)
  })

  if (!cursor) {
    res.status(404)
    res.send("Sample is not found")
  } else {
    database.updateOne({ _id: ObjectId(id) }, { $set: newUpdatedData })
    cursor = await database.findOne({ _id: ObjectId(id) })
    res.send(cursor)
  }
}

const data_form_delete = async (req, res) => {
  console.log(req.params.sampleid, "delete")
  const id = req.params.sampleid;
  let cursor = await database.findOne({
    _id: ObjectId(id)
  })

  let url = cursor.url.slice(1,100)

  if (!cursor) {
    res.status(404)
    res.send("Sample is not found")
  } else {
    database.deleteOne({
      _id: ObjectId(id)
    });
    if(url.match("uploads")){
      fs.unlinkSync("public" + url)
    }
  }
  res.send("deleted")
}

const datacontrol = {
  data_index,
  data_details,
  data_form_get,
  data_form_update,
  data_form_delete,
  data_post,
  data_img
}

export default datacontrol


