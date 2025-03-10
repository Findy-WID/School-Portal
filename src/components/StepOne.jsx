import { useState } from "react";
import "./formStyles.css"

const StepOne = ({nextStep, updateFormData}) => {
    const [data, setData] = useState({
        name : "",
        age : "",
        class: "",
    })
    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    };

    const handleNext = () => {
        updateFormData(data);
        nextStep();
    }
  return (
    <div>
        <div className="formContainer">
            <div className="formheader">
                <h1>Student Registeration</h1>
                <p>Fill in the form below to register as a student.</p>
            </div>
            <input type="text" name='name' placeholder='Enter your full name e.g Jane Doe' onChange = {handleChange}/>
            <input type="text" name='age' placeholder='Enter your age' onChange = {handleChange}/>
            <input type="text" name='class' placeholder='Enter your class' onChange = {handleChange}/>

            <div className="buttonContainer">
            <button className="next" onClick={handleNext}>Next</button> 
            </div>
        </div>
    </div>
  )
}

export default StepOne
