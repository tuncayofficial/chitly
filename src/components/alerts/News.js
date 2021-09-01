import { BsFillChatSquareDotsFill } from "react-icons/bs"


const News = (props) =>{
    const handleClick = () =>{
      localStorage.setItem("news", false)
    }

    return(
        <div className = "news">
            <div className="icon">
                <BsFillChatSquareDotsFill style = {{ margin : "20px"}} size = {30} />
            </div>
            <div className="description">
                <h2>Check the new <a href = "/chat">Global chat!</a>  ( Hosted with Chat Engine v2 )</h2>
            </div>
        </div>
    )
}

export default News;