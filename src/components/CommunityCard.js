import axios from 'axios'
import { useState, useEffect } from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Button from '@material-ui/core/Button';

function CommunityCard(props){
   const [communities, setCommunities] = useState([])
   const [exists, setExists] = useState()
   const auth = firebase.auth()
   const user = auth.currentUser

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
       .then(data => {
           if(data.forEach(community => community.members.includes(user && user.displayName))){
               setExists(true)
           }
           setCommunities(data)
        })
   }

    function handleJoin(communityID, user, axios){
        const exists = localStorage.setItem(communityID, true)
        console.log(true)
    const url = "http://localhost:8080/addMember"
    const data = {
        communityID,
        user : user && user.displayName
    }
    const options = {
        method : "POST",
        header : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body : data
    }
    
    axios.post(url, data, {
        header : {
            "Content-Type" : "application/x-www-form-urlencoded"
        }
    })

    window.location.reload()
}

function handleQuit(communityID, user, axios){
    const exists = localStorage.setItem(communityID, true)
    console.log(true)
const url = "http://localhost:8080/quitMember"
const data = {
    communityID,
    user : user && user.displayName
}
const options = {
    method : "POST",
    header : {
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    body : data
}

axios.post(url, data, {
    header : {
        "Content-Type" : "application/x-www-form-urlencoded"
    }
})

  window.location.reload()
}

useEffect(()=>{
    fetchCommunities()
 },[])



   return(
       <div className="community-container">
           
           {communities.map(function(community) {
              return (
                   <div key = {community._id} className="community-card">
                   <div className="banner">
                     <img alt = "banner" src = {community.banner} />
                   </div>
                   <div className="info">
                      <span className="name"><strong>Community name : {community.name}</strong></span>
                      <span className="id"><strong>Community ID : {community._id}</strong></span>
                      <span className="members"><strong>Member count : {community.members.length}</strong></span>
                   </div>
                   {community.members.includes(user && user.displayName)?  (<button style = {{ backgroundColor : "red"}} onClick={() => handleQuit(community._id, user, axios)}>Quit</button>) : (<button onClick={() => handleJoin(community._id, user, axios)}>Join</button>)  }
                   <a style = {{ color : "dodgerBlue", padding : "0",  }} href = "/community/{community.name}" ><h4>Go to community page</h4></a>
                   </div>
               )
           })}
       </div>
   )
    

}      

export default CommunityCard