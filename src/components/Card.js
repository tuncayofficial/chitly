import centerObjects from "../tools/center";
import React,{ useEffect, useState } from "react"
import Button from "./Button";

function Card(props){

  const [firstCard, setFirstCard] = useState("")
  const [secondCard, setSecondCard] = useState("")
  const [thirdCard, setThirdCard] = useState("")
  const [avatar, setAvatar] = useState()
  const direct = "/users/" + firstCard.username

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

  var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };
  
  
  useEffect(() => {
    getFirstUser()
    getSecondUser()
    getThirdUser()
  }, [])

 let image = stringToHTML(firstCard.avatar)

    return (
      <p>
      <div className="card">
      <div className="banner">
      </div>
        <br /><br />
         <div className = "title"><h2>{firstCard.username}</h2></div><br />
         <a style = {{ color : "dodgerBlue", padding : "0",  }} href = {direct}><h3>About user</h3></a>
      </div>
      <div className="card">
      <br /><br />
       <div className = "title"><h2>{secondCard.username}</h2></div><br />
       <a style = {{ color : "dodgerBlue", padding : "0",  }} href = {direct}><h3>About user</h3></a>
    </div>
    <div className="card">
    <br /><br />
     <div className = "title"><h2>{thirdCard.username}</h2></div><br />
     <a style = {{ color : "dodgerBlue", padding : "0",  }} href = {direct}><h3>About user</h3></a>
  </div>
  </p>
    )
}

export default Card;