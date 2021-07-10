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

module.exports = {
    createCommunity
}