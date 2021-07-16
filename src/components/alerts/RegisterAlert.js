import "../styles/alerts.css"

function RegisterAlert({ message }){
    return (
      <div className="register-alert">
          {message}
      </div>
    )
}

export default RegisterAlert