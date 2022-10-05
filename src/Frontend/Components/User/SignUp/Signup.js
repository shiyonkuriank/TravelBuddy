import React, {useState} from "react";
import './SignUp.css'
import '../Landing/Navbar'
import Navbar from "../Landing/Navbar";
import travelPlanner from '../../Images/travelplanner.jpg';

const SignUp = ()=>{

  let details = [];
  let regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const [email,setEmail]=useState(" ");
    const[pass1,setPass1]=useState(" ");
    const[pass2,setPass2]=useState(" ");
  let errorEl = document.querySelector('#error-el');

  
  function register() {
    if (pass1 === pass2) {
      if (!regularExpression.test(pass1)) {
        errorEl.textContent =
          'password should contain atleast one number and one special character';
        
      } else {
        details.push(email, pass1);

      }
    } else {
      errorEl.textContent = "Password Doesn't match";
    }
  };

    return(
        <>
        <Navbar/>
        <div className="sign-up-container" >
        
        <form onSubmit={register}>
        <h1>Sign Up</h1>
        <p id = "signup-label">Email</p>
        <input id="email-el" required type="email" onChange={(e)=>{
                    setEmail(e.target.value); }}></input>  
        <p id = "signup-label">Password</p>
        <input id="password-el" required type="password" minlength="8" onChange={(e)=>{
                    setPass1(e.target.value); }}></input>
        <p id = "signup-label">Confirm Password</p>
        <input id="confirm-password-el" required type="password" minlength="8" onChange={(e)=>{
                    setPass2(e.target.value); }}></input>
        <div>
        <button id = "sign-up-el" type="submit">Sign Up</button>
        <p id = "error-el"></p>
        </div>
        </form>
            
        </div></>
        
    );
    
}

export default SignUp;