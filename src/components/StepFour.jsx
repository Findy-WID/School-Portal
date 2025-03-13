import { useState } from "react"
import "./formStyles.css"

export default function StepFour({nextStep, prevStep, updateFormData, sciSubjects, artSubjects}) {

    const [isScience, setIsScience] = useState(true);

    
    const [data, setData] = useState({
        subjects: []
    })

    const handleChange = (e) => {
        const subject = e.target.value;
        const isChecked = e.target.checked;

        setData((prev) => {
            let upDatedSubjects = [...prev.subjects];

            if (isChecked) {
                upDatedSubjects.push(subject);
            } else {
                upDatedSubjects = upDatedSubjects.filter((subj) => subj !== subject);
            }
            return {
                ...prev, subjects: upDatedSubjects
            }
        });
    };    

    const handleConfirm = () => {
        updateFormData(data);
        const isConfirm = window.confirm("Are you sure you want to submit?")
        if (isConfirm) {
            nextStep();
        }
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

                <div>
                  {
                    isScience ? (
                        <ul>
                            <h3>Compulsory Science Subjects:</h3>
                            {sciSubjects.map(sciSubject => (
                                <li key={sciSubject}>{sciSubject}</li>
                            ))}

<div>
                        <h3>Optional subjects: Choose from below</h3>
                        {
                            ["Agriculture", "Economics", "Commerce", "Social Studies"].map((subject) =>(
                                <label key={subject}>
                                    <input type="checkbox" name='subject' value= {subject} onChange = {handleChange}/>
                                    {subject}
                                </label>
                            ))
                        }
                    </div>
                       </ul>
                    ) : (
                        <ul>
                            <h3>Compulsory Art Subjects:</h3>
                            {artSubjects.map(artSubject => (
                                <li key={artSubject}>{artSubject}</li>
                            ))}

<div>
                        <h3>Optional subjects: Choose from below</h3>
                        {
                            ["Agriculture", "Economics", "Commerce", "Social Studies"].map((subject) =>(
                                <label key={subject}>
                                    <input type="checkbox" name='subject' value= {subject} onChange = {handleChange}/>
                                    {subject}
                                </label>
                            ))
                        }
                    </div>
                        </ul>
                    )
                    
                  }                
                </div>


                    <div className="toggleContainer">
                        <button onClick={() => setIsScience(true)} className = {isScience ? "active" : ""}>Science</button>
                        <button onClick={() => setIsScience(false)} className = {!isScience ? "active" : ""}>Arts</button>
                    </div>


                    <div className="buttonContainer">
                        <button className="prev" onClick={handlePrev}>Previous</button>
                        <button className="next" onClick={handleConfirm}>Confirm</button>
                    </div>
                </div>
            </div>
    )
}