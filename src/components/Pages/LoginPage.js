import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import Login from "../Login"
import RegisterAlert from "../alerts/RegisterAlert"
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const useAlertStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function LoginPage(){
    const { login, error} = useAuth()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const alertClasses = useAlertStyles()
    
   async function handleSubmit(e){
     e.preventDefault()
     try{
        await login(email, password)
     } catch(error){
       console.error(error)
     }
   }

   return (
       <div className = "register">
           <form className = {classes.root} onSubmit={handleSubmit} noValidate autoComplete="off" >
             <div className = {alertClasses.root}>
               {error && (
               <Alert severity="error">
                 <AlertTitle>Error</AlertTitle>
               <strong>{error}</strong>
               </Alert>
               )}
             </div>
               <div align = "center">
               <h2>Login</h2>
              </div>
              <div className="username">
              <label>E-mail</label><br />
                  <input id="outlined-basic" label="Outlined" variant="outlined" type = "email" onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="username">
              <label>Password</label><br />
                  <input id="outlined-basic" label="Outlined" variant="outlined" type = "password" onChange={e => setPassword(e.target.value)} />
              </div>
              <button disabled = {loading} type="submit">Login</button>
              <div className="social-media">
                  Or use social media apps to create profile : <br />
                  <Login />
              </div>
           </form>
       </div>
   )
}

export default LoginPage