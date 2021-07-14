import { useState } from "react"
import axios from "axios"
import { useAuth } from "../context/AuthContext"

function Register(){

    const { register } = useAuth()
    
    const [nickname, setNickname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

   function handleSubmit(e){
     e.preventDefault()
     try{
         register(email, password)
     } catch {
         console.error("error!")
     }
   }

   return (
       <div className = "register">
           <form onSubmit={handleSubmit} className="register-form">
              <div className="username">
                  <label>Username</label>
                  <input  type = "text" onChange={e => setNickname(e.target.value)} />
              </div>
              <div className="username">
              <label>Email</label>
                  <input type = "email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="username">
              <label>Password</label>
                  <input type = "password" onChange={e => setPassword(e.target.value)} />
              </div>
              <button type="submit">Register</button>
           </form>
       </div>
   )
}

export default Register