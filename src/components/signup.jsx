import React, { useState } from "react";
import "../components/signup.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] =useState("") 
    const [confirmPassword, setCorfirmPassword] =useState("")

    const handleSignup = async(e)=>{
        e.preventDefault()
        // console.log("working");
        // console.log(email);
        // console.log(password);
        // console.log(confirmPassword);

        

        if(!email.includes("@"))
        {
            alert("Please enter valid email id")
            return
        }

        let pWord = password
        let cpWord = confirmPassword
        if(pWord!== cpWord)
        {
            alert("Password doesn't match")
            return
        }

        const res = await axios.post("https://notestaker.onrender.com/signup", {email:email, password:password})
        console.log(res);
        if(res.data.status === "failed")
        {
            alert("User already exits!")
            return
        }
        alert("Welcome! You Signed Up Successfully")
        navigate("/")

    }
  return (
    <div>
      <div className="container">
        <h1>Sign Up Form</h1>
        <form>
          <div className="box">
            <label htmlFor="email">Email Address</label>
            <input type="text" className="input" placeholder="Email Id" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
          </div>
          <div className="box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              onChange={(e)=>{setPassword(e.target.value)}} value={password}
            />
          </div>
          <div className="box">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              className="input"
              placeholder="Confirm Password"
              onChange={(e)=>{setCorfirmPassword(e.target.value)}} value={confirmPassword}
            />
          </div>
          
          <div className="checkbox">
            <input type="checkbox"  />
            <span><p>I agree terms and condtitions</p></span>
            </div>
          <div className="box">
            <button onClick={handleSignup}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
