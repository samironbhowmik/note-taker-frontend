import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../components/signup.css"

function Signin() {
    const navigate = useNavigate()

    const [email,setEmail] =useState()
    const [password,setPassword] =useState("")

    const handleSignin = async(e)=>{
        e.preventDefault()
        // console.log("working");
        const res = await axios.post("https://notestaker.onrender.com/signin", {email:email, password:password})
        console.log(res);

        if(res.data.status ==="success")
        {
            sessionStorage.setItem("token", res.data.token)
            alert("Welcome back! You've Logged In Successfully")
            navigate("/home")
        }
        else{
            alert("Invalid Credentials, Please try again with correct email and password")
        }
    }
  return (
    <div>
        <div className="container">
        <h1>Sign In Form</h1>
            <form>
                <div className="box">
                    <input type="text" placeholder='Email' className='input' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                </div>
                <div className='box'>
                    <input type="text" placeholder='Password' className='input' onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                </div>
                <div className='checkbox'>
                    <input type="checkbox" />
                    <span><p>I agree terms and conditions</p></span>
                </div>
                <div className="box">
                    <button onClick={handleSignin}>Sign In</button>
                </div>

                <p>Don't have an account?
                <Link to="/signup">Signup now</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Signin