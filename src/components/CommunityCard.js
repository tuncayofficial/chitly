import axios from 'axios'
import { useState, useEffect } from 'react'

function CommunityCard(props){
   const [communities, setCommunities] = useState([])

   const fetchCommunities = () =>{
       const url = "http://localhost:8080/getCommunity"
       const options = {
           method : "POST",
           header : {
               "Content-Type" : "application/json"
           }
       }
       fetch(url, options)
       .then(res => res.json())
       .then(data => setCommunities(data))
   }
   
   useEffect(() =>{
       fetchCommunities()
   }, [])
   return(
       <div className="community-container">
           
           {communities.map(function(community) {
              return (
                   <div className="community-card">
                   <div className="banner">
                     <img alt = "banner" src = {community.banner} />
                   </div>
                   <div className="info">
                      <span className="name">Community name : {community.name}</span>
                      <span className="id">Community ID : {community._id}</span>
                   </div>
                   <button>Join</button>
                   </div>
               )
           })}
       </div>
   )
    

}      

export default CommunityCard