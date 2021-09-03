import axios from "axios"
import { useEffect, useState } from "react"

const Topics = (props) =>{
    const [topics, setTopics] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8080/topics")
        .then(res => setTopics(res.data))
    })

    return (
       <div className = "topic-container">
           {topics.map(function(topic){
               return (<div className = "topic" key = {topic}><strong>{topic}</strong></div>)
           })}
           
       </div>
    )
}

export default Topics;