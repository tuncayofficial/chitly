const mongoose = require("mongoose")
const User = require("../models/User")

function getAllUsers(req, res){
   User.find().then(user =>{
       res.json(user)
   })
}

function getSingleUser(req, res, nick){
    User.findOne({ username : nick}).then(user => {
        res.json(user)
    })
}

function updateUser(req, res, id, newUsername){
   User.findByIdAndUpdate({ id }, { username : newUsername }).then(user =>{
       res.json(user)
   })
}

async function createUser(req, res, username, email, password, bio, avatar){
   const userObject = {
       username,
       email,
       password,
       avatar
   }

   const user = new User(userObject)

   await user.save().then(newUser =>{
       res.json(newUser)
   })
}

async function createFirebaseUser(req, res, username, email, avatar){
    const userObject = {
        username,
        email,
        avatar
    }
 
    const user = new User(userObject)
 
    await user.save().then(newUser =>{
        res.json(newUser)
    })
 }

module.exports = {
    updateUser,
    getAllUsers,
    getSingleUser,
    createUser,
    createFirebaseUser
}