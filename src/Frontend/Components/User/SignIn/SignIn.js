import React, {useState} from "react";
import './SignIn.css'
import '../Landing/Navbar'
import Navbar from "../Landing/Navbar";
import { useNavigate } from 'react-router-dom';

const SignIn = ()=>{
    const navigate = useNavigate();
    const [email,setEmail]=useState(" ");
    const[pass1,setPass1]=useState(" ");
    
  let errorEl = document.querySelector('#error-el');

  
  function login() {
    navigate('/travelbuddy');
  };

    return(
        <>
        <Navbar/>
        <div className="sign-in-container" >
        
        <form onSubmit={login}>
        <h1>Sign In</h1>
        <p id = "signup-label">Email</p>
        <input id="email-el" required type="email" onChange={(e)=>{
                    setEmail(e.target.value); }}></input>  
        <p id = "signup-label">Password</p>
        <input id="password-el" required type="password" minlength="8" onChange={(e)=>{
                    setPass1(e.target.value); }}></input>
        
        <div>
        <button id = "sign-up-el" type="submit">Sign In</button>
        <p id = "error-el"></p>
        </div>
        </form>
            
        </div></>
        
    );
    
}

export default SignIn;