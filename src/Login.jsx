import React from 'react'
import { Link } from 'react-router-dom'
import "./Components/css/Navbar.css"

const Login = () => {



  return (
    <div id='main-login'>
        <div id='login'>
        <img src="https://i.ibb.co/dBbJ8cX/zee5login.jpg"  />
        <input type="text" placeholder='Enter email or Mobile number' />
        <a href="/">Forgot Password</a>
        <Link to='/'>
        <button onClick={()=>alert("Logged In")}>Login</button>
        </Link>
        </div>
    </div>
  )
}

export default Login