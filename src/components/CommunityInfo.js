import { useState, useEffect, useRef } from "react"
import axios from "axios"

function CommunityInfo({ onCommunitySearch }){
    return (
      <div className="community">
         <h3>Chitly communities are providing to search about your hobbies, interests and interacting with people!</h3><br /><br /><br />
         <a className="labelbutton" href = "/communities"><strong>Learn more about communities</strong></a><br /><br /><br />
      </div>
    )
}

export default CommunityInfo