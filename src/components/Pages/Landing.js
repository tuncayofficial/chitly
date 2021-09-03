import Card from "../Card"
import CommunityInfo from "../CommunityInfo"
import { useState, useContext } from "react"
import { useAuth } from "../context/AuthContext"
import "../styles/typewriter.css"
import Specifies from "../alerts/Specifies"
import Topics from "../alerts/Topics"

function Landing(){
    const {user} = useAuth()
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
             <a style = {{ color : "dodgerBlue", padding : "0",  }} href = "/users"><h3>See more users</h3></a>
        </div>
        <div align = "center">
           <h1>Avaliable communities</h1>
                 <CommunityInfo />
        </div>
        <img className = "likebuttonpng" src = "https://media.discordapp.net/attachments/864600856015011851/882618972757966868/copy_4867378.png" />
        <img className="starpng" src = "https://media.discordapp.net/attachments/864600856015011851/882621162436300830/copy_430396174.png?width=400&height=400" />
        <img className="laughpng" src = "https://media.discordapp.net/attachments/864600856015011851/882628257273491647/91118984178.png?width=400&height=400" />
        <div className = "specifies" align = "center">
            <h1>Chitly specifies :</h1>
            <Specifies text = "Community boosts! ( Up to 5000 members )" color = "blue" />
            <Specifies text = "Special rooms for squads!" color = "#0e4a69" />
            <Specifies text = "School groups! ( To create one, contact our admins. )" color = "#5b0d61" />
            <Specifies text = "Gamer special community, voice chat and more!" color = "#694111" />
            <Specifies text = "Special API for Bot developers!" color = "#8f0303" />
            <Specifies text = "Make your own content and topic!" color = "#570808" />
        </div>
        <div className="topic-landing" align = "center">
            <h1>Current Topics :</h1>
           <Topics />
        </div>
        </div>
    )
}

export default Landing