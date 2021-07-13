import Card from "../Card"
import CommunityInfo from "../CommunityInfo"
import { useState, useContext } from "react"
import { useAuth }from "../context/AuthContext"
import "../styles/typewriter.css"

function Landing(){
    const user = useAuth()
    return(
        <div align = "center">
        <div align = "center">
          <br />
            <div>
                <h1 className="typewriter">Welcome to the Chitly</h1><br />
            </div>  
            <h3>Chitly is a platform that you can create communities, posts and more!</h3>
            <h1>Avaliable users</h1>
             <Card />
             <a style = {{ color : "dodgerBlue", padding : "0",  }} href = "/users"><h4>See more users</h4></a>
        </div>
        <div align = "center">
           <h1>Avaliable communities</h1>
                 <CommunityInfo />
                 <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        </div>
    )
}

export default Landing