import { useState } from "react"
import "./formStyles.css"

export default function StepTwo({nextStep, prevStep, updateFormData}) {
    const[data, setData] = useState({
        email: "",
        phone: "",
        address: "",
    })

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    }

    const handleNext = () => {
        updateFormData(data);
        nextStep();
    }

    const handlePrev = () => {
        prevStep();
        updateFormData(data);
    }
    return(
        <>
        <div>
            <div className="formContainer">
                <div className="formheader">
                    <h1>Contact Information</h1>
                    <p>We can stay connected. Provide your phone number, email, and address. </p>
                </div>
                <input type="text" name='email' placeholder='Enter your email e.g janedoe@gmail.com' onChange = {handleChange}/>
                <input type="number" name='phone' placeholder='Enter your Phone Number e.g 08012345678' onChange = {handleChange}/>
                <input type="text" name='address' placeholder='Enter your Address e.g #5, Anywhere Sreet.' onChange = {handleChange}/>

                <div className="buttonContainer">
                <button className="prev" onClick={handlePrev}>Previous</button>
                <button className="next" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
        </>
    )
}