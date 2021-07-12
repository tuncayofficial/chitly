import axios from 'axios'
import { useState, useEffect } from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function CommunityCard(props){
   const [communities, setCommunities] = useState([])
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
           setCommunities(data)
        })
   }

    function handleJoin(communityName, user, axios){
        const exists = localStorage.setItem(communityName, true)
        console.log(true)
    const url = "http://localhost:8080/addMember"
    const data = {
        communityName,
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
}

   const handleQuit = async(communityName) => {
    const exists = await localStorage.setItem(communityName, false)
    console.log(false)
    const url = "http://localhost:8080/quitMember"
    const data = {
        communityName,
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
                      <span className="name">Community name : {community.name}</span>
                      <span className="id">Community ID : {community._id}</span>
                      <span className="members">Member count : {community.members.length}</span>
                   </div>
                   {localStorage.getItem(community.name) ?  (<button onClick={() => handleQuit(community.name, user, axios)}>Quit</button>) : (<button onClick={() => handleJoin(community.name, user, axios)}>Join</button>)  }
                   </div>
               )
           })}
       </div>
   )
    

}      

export default CommunityCard