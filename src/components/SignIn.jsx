import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./formStyles.css"

export const SignIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname : "",
        password : "",
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault;
        if(formData.fullname && formData.password) {
            navigate("/StudentList")
        } else{
            alert("Please enter valid details")
        }
    }

  return (
    <div>
        <div className="formContainer">
                    <div className="formheader">
                        <h1>Sign In</h1>
                        <p>Please enter your full name and password to access the portal.</p>
                    </div>
                    <input type="text" name='fullname' placeholder='Enter your Full Name' onChange = {handleChange}/>
                    <input type="password" name='password' placeholder='Enter your Password' onChange = {handleChange}/>

                    <div className="buttonContainer">
                        <p>Don't have an account yet?</p>
                        <button className="" onClick={() => navigate("/signup")}>SignUp</button>
                    </div>
                </div>
    </div>
  )
}
