// Module exporting
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const session = require("express-session")
const fetch = require("node-fetch")
dotenv.config()

// File importing
const userControllers = require("./controllers/users.js")
const communityControllers = require("./controllers/communities.js")
const User = require("./models/User")
const Community = require("./models/Community")
const { find } = require("./models/User")

const port = 8080
const db = process.env.DATABASE_URL

const app = express()
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended : false}))
app.use(session({
  secret: process.env.SUPER_GIZLI_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected To The Database..");
  });


app.get("/", (req, res) =>{
    res.json(req.user)
})

app.get("/user", async(req, res) => {
  User.countDocuments().exec(function (_err, count) {

    var random = Math.floor(Math.random() * count)

    User.findOne().skip(random).exec(
      function (err, result) {
        res.json(result)
      })
  })
})

app.post("/register", (req, res)=>{
    const { createUser } = userControllers
    const { username, email, password, bio } = req.body
    createUser(req, res, username, email, password, bio)
})

app.post("/sendUser", (req, res)=>{
   res.json(req.body)
})

app.post("/getCommunity", async(req, res) =>{
  let communities = await Community.find()
  res.json(communities)
})

app.post("/createCommunity", (req, res)=> {
  const { createCommunity } = communityControllers
  const { name, avatar, description, banner } = req.body
  createCommunity(req, res, name, avatar, description, banner )
})

app.post("/getSpecificCommunity", (req, res)=> {
  let { name } = req.body
  let { findCommunity } = communityControllers
  findCommunity(req, res, name)
})

app.get("/topics", (req, res) =>{
  let topics = [
    "Art",
    "Programming & Technology",
    "Move & TV Series",
    "Book Clubs",
    "Cooking"
  ]

  res.json(topics)
})

app.post("/addMember", (req, res) => {
  let { addMember } = communityControllers
  let {  communityName, user } = req.body
  addMember(req, res, communityName, user)
  console.log(req.body)
})

app.post("/quitMember", (req, res) => {
  let { quitFromCommunity } = communityControllers
  let {  communityName, user } = req.body
  quitFromCommunity(req, res, communityName, user)
  console.log(req.body)
})

app.listen(port, () => console.log("Server started and listening on 8080"))