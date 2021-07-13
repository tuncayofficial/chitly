const Community = require("../models/Community")

const createCommunity = async(req, res, name, avatar, description, banner) =>{
      const communityObject = {
        name : name,
        avatar : avatar,
        description : description,
        banner : banner
      }

      const community = new Community(communityObject)
      await community.save().then(community =>{
          res.json(community)
      })
}

const findCommunity = async(req, res, name) => {
  const community = await Community.findOne({ name }).then((err, doc)=>{
    if(err) throw err
    if(typeof doc === undefined){
      res.sendStatus(403)
    }
    res.json(doc)
  })
}

const addMember = async(req, res, communityID, user) => {
    Community.updateOne(
      {_id : communityID},
      { $push : { members : user } },
      function(err, result){
        if(err) throw err;
        res.json(result)
      }
    )
}

const quitFromCommunity = async(req, res, communityID, user) => {
  Community.updateOne(
    {_id : communityID},
    { $pull : { members : user } },
    function(err, result){
      if(err) throw err;
      res.json(result)
    }
  )
}

module.exports = {
    createCommunity,
    findCommunity,
    addMember,
    quitFromCommunity
}