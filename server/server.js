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

const port = 8080
const db = process.env.DATABASE_URL

const app = express()

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

app.use(cors())

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
    const { username, email, password } = req.body
    createUser(req, res, username, email, password)
})

app.post("/sendUser", (req, res)=>{
  const sa = 31
  console.log(req.body)
})

app.post("/getCommunity", (req, res) =>{
  Community.countDocuments().exec(function (_err, count) {

    var random = Math.floor(Math.random() * count)

    Community.findOne().skip(random).exec(
      function (err, result) {
        res.json(result)
      })
  })
})

app.post("/createCommunity", (req, res)=> {
  const { createCommunity } = communityControllers
  const { name, avatar, description, banner } = req.body
  createCommunity(req, res, name, avatar, description, banner )
})


app.listen(port, () => console.log("Server started and listening on 8080"))