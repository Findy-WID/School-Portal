import { useState } from "react"
import "./formStyles.css"

export default function StepThree({nextStep, prevStep, updateFormData}) {

    const [data, setData] = useState({
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    };    

    const handleNext = () => {
        updateFormData(data);
        nextStep();
    };
    
    const handlePrev = () => {
        updateFormData(data);
        prevStep();
    };

    return(
        <>
            <div>
                <div className="formContainer">
                    <div className="formheader">
                        <h1>Student Registeration</h1>
                        <p>Let's get your student account secured.</p>
                    </div>
                    <input type="password" name='password' placeholder='Enter your Password' onChange = {handleChange}/>
                    <input type="password" name='confirmPassword' placeholder='Confirm your Password' onChange = {handleChange}/>

                    <div className="buttonContainer">
                        <button className="prev" onClick={handlePrev}>Previous</button>
                        <button className="next" onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}