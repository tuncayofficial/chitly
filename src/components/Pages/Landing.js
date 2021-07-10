import Card from "../Card"
import CommunityCard from "../CommunityCards"

function Landing(){

    return(
        <p align = "center">
        <p align = "center">
            <h1>Welcome to the Chitly</h1><br />
            <p>Chitly is a platform that you can create communities, posts and more!</p>
            <h1>Avaliable users</h1>
       <Card />
        </p>
        <p align = "center">
           <h1>Avaliable communities</h1>
           <CommunityCard />
        </p>
        </p>
    )
}

export default Landing