import { useState } from "react"
import "./formStyles.css"

export default function StepFour({nextStep, prevStep, updateFormData, sciSubjects, artSubjects}) {

    const [isScience, setIsScience] = useState(true);
    
    // const [data, setData] = useState([])

    // const handleChange = (e) => {
    //     setData({
    //         ...data, [e.target.name]: e.target.value
    //     });
    // };    

    const handleNext = () => {
        updateFormData(data);
        nextStep();
    };
    
    const handlePrev = () => {
        updateFormData(data);
        prevStep();
    };

    return(
            <div>
                <div className="formContainer sciDefault">
                    <div className="formheader">
                        <h1>Student Subject</h1>
                        <p>Toggle the button to view various compulsory and optional subjects</p>
                    </div>

                <>
                  {
                    isScience ? (
                        <ul>
                            <h3>Compulsory Science Subjects:</h3>
                            {sciSubjects.map(sciSubject => (
                                <li key={sciSubject}>{sciSubject}</li>
                            ))}
                       </ul>
                    ) : (
                        <ul>
                            <h3>Compulsory Art Subjects:</h3>
                            {artSubjects.map(artSubject => {
                                <li key={artSubject}>{artSubject}</li>
                            })}
                        </ul>
                    )
                    
                  }                
                </>  

                    {/* <div>
                        <h3>Optional Science subjects: Choose from below</h3>
                        <input type="checkbox" name='subject' value= "Agriculture" onChange = {handleChange}/>
                        <input type="checkbox" name='subject' value= "Economics" onChange = {handleChange}/>
                        <input type="checkbox" name='subject' value= "Commerce" onChange = {handleChange}/>
                        <input type="checkbox" name='subject' value= "Social Studies" onChange = {handleChange}/>
                    </div>

                  

                    <div>
                        <h3>Optional Art subjects: Choose from below</h3>
                        <input type="checkbox" name='subject' value= "Agriculture" onChange = {handleChange}/>
                        <input type="checkbox" name='subject' value= "Economics" onChange = {handleChange}/>
                        <input type="checkbox" name='subject' value= "Commerce" onChange = {handleChange}/>
                        <input type="checkbox" name='subject' value= "Social Studies" onChange = {handleChange}/>
                    </div> */}


                    <div className="toggleContainer">
                        <button onClick={() => setIsScience(true)} className = {isScience ? "active" : ""}>Science</button>
                        <button onClick={() => setIsScience(false)} className = {!isScience ? "active" : ""}>Arts</button>
                    </div>


                    <div className="buttonContainer">
                        <button className="prev" onClick={handlePrev}>Previous</button>
                        <button className="next" onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
    )
}