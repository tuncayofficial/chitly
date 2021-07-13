import Card from "../Card"
import CommunityInfo from "../CommunityInfo"
import { useState, useContext } from "react"
import AuthProvider from "../context/AuthContext"

function Landing(){

    return(
        <div align = "center">
        <div align = "center">
            <h1>Welcome to the Chitly</h1><br />
            <h3>Chitly is a platform that you can create communities, posts and more!</h3>
            <h1>Avaliable users</h1>
       <Card />
        </div>
        <div align = "center">
           <h1>Avaliable communities</h1>
                 <CommunityInfo />
        </div>
        </div>
    )
}

export default Landing