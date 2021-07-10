import centerObjects from "../tools/center";
import { useEffect, useState } from "react"
import Button from "./Button";

function Card(props){

  const [firstCard, setFirstCard] = useState("")
  const [secondCard, setSecondCard] = useState("")
  const [thirdCard, setThirdCard] = useState("")

  const getFirstUser = ()=>{
    fetch("http://localhost:8080/user")
    .then(res => res.json())
    .then(data => {
      setFirstCard(data)
    })
  }

  const getSecondUser = ()=>{
    fetch("http://localhost:8080/user")
    .then(res => res.json())
    .then(data => {
      setSecondCard(data)
    })
  }

  const getThirdUser = ()=>{
    fetch("http://localhost:8080/user")
    .then(res => res.json())
    .then(data => {
      setThirdCard(data)
    })
  }
  
  useEffect(() => {
     getFirstUser()
     getSecondUser()
     getThirdUser()   
  }, [])

    return (
      <p>
      <div className="card">
        <br /><br />
         <div className = "title">{firstCard.username}</div><br />
         <div className = "description">{firstCard.status}</div><br />
         <Button title = "Add friend" />
      </div>
      <div className="card">
      <br /><br />
       <div className = "title">{secondCard.username}</div><br />
       <div className = "description">{secondCard.status}</div><br />
       <Button title = "Add friend" />
    </div>
    <div className="card">
    <br /><br />
     <div className = "title">{thirdCard.username}</div><br />
     <div className = "description">{thirdCard.status}</div><br />
     <Button title = "Add friend" />
  </div>
  </p>
    )
}

export default Card;