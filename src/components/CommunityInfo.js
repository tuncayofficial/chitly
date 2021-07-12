import { useState, useEffect, useRef } from "react"
import axios from "axios"

function CommunityInfo({ onCommunitySearch }){
    return (
      <div className="community">
         <h3>Chitly communities are providing to search about your hobbies, interests and interacting with people!</h3>
         <a style = {{ color : "dodgerBlue", padding : "0",  }} href = "/communities"><h4>Learn more about communities</h4></a>
      </div>
    )
}

export default CommunityInfo