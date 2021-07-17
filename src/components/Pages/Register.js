import { useState } from "react"
import axios from "axios"
import { useAuth } from "../context/AuthContext"
import { makeStyles } from '@material-ui/core/styles';
import Login from "../Login"
import GitHubLogin from "../GitHubLogin"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Register(){
    const classes = useStyles();
    const { register } = useAuth()
    const [error, setError] = useState()
    const [nickname, setNickname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

   function handleSubmit(e){
     e.preventDefault()
     try{
         register(email, password, nickname)
         setLoading(true)
     } catch(error) {
         setError(error.message)
     }
   }

   return (
       <div className = "register">
           <form className = {classes.root} onSubmit={handleSubmit} noValidate autoComplete="off" >
               <div align = "center">
               <h2>Register</h2>
              </div>
              <div className="username">
                  <label>Username</label>
                  <input style = {inputStyles} type = "text" onChange={e => setNickname(e.target.value)} />
              </div>
              <div className="username">
              <label>E-mail</label><br />
                  <input style = {inputStyles} id="outlined-basic" label="Outlined" variant="outlined" type = "email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="username">
              <label>Password</label>
                  <input style = {inputStyles} id="outlined-basic" label="Outlined" variant="outlined" type = "password" onChange={e => setPassword(e.target.value)} />
              </div>
              <button disabled = {loading} type="submit">Register</button>
              <div className="social-media">
                  Or use social media apps to create profile : <br />
                  <Login />
              </div>
              <div className="direct">
                  Already have an account? <a style = {{ color : "dodgerblue" }} href = "/login">Login</a>
              </div>
           </form>
       </div>
   )
}

const inputStyles = {
    position : "relative",
    right : "30px"
  }

export default Register