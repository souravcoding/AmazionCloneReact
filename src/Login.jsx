import React from 'react'
import './login.css'
import {Link, useHistory} from "react-router-dom"
import { useState } from 'react'
import { auth } from './firebase'
function Login() {
    const history=useHistory()
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const loginb =(event)=>{
        event.preventDefault()
      auth.signInWithEmailAndPassword(email,password).then((auth)=>{
        history.push('/')
      }).catch((e)=>alert(e.message))
    }


const register=(event)=>{
  event.preventDefault()
  auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
    history.push('/')
  }).catch((e)=>alert(e.message))
} 
    return (

        <div className="Login">
           <Link to='/'>
           <img className="login_logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>

           </Link>
           <div className="login_container">
               <h1>Sign In</h1>
               <form >
                   <h5>E-Mail</h5>
                   <input value={email} onChange={event=>setemail(event.target.value)} type="email"/>
                   <h5>Password</h5>
                   <input value={password} onChange={event=>setpassword(event.target.value)} type="password"/>
                    <button onClick={loginb} type="submit" className="signin_btn">Sign-In</button>
               </form>
               <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className='register_btn'>Create your Amazon account</button>
           </div>
        </div>
    )
}

export default Login
