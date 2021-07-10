import { useState } from "react"

function CommunityCard(props){

  const [community, setCommunity] = useState({})

  function fetchCommunity(){
    const url = "http://localhost:8080/getCommunity"
    const options = {
      method : "POST",
      header : {
        "Content-Type" : "application/json"
      }
    }

    fetch(url, options)
  }

    return (
      <div className="community">
          <div className = "banner">
          </div>
          <div className="description">
            <span className="title">{community.name}</span>
          </div>
      </div>
    )
}

export default CommunityCard