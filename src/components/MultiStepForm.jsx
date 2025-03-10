import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StudentList from "./StudentList";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        class: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        subjects: [],
        hobbies: []
    })

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const updateFormData = (data) => {
        setFormData((prev) => ({...prev, ...data}))
    };
  return (
    <div>
        {step === 1 && <StepOne nextStep = {nextStep} updateFormData = {updateFormData}/>}
        {step === 2 && <StepTwo nextStep = {nextStep} prevStep = {prevStep} updateFormData = {updateFormData}/>}
        {step === 3 && <StepThree nextStep = {nextStep} prevStep = {prevStep} updateFormData = {updateFormData}/>}
        {step === 4 && <StepFour nextStep = {nextStep} prevStep = {prevStep} updateFormData = {updateFormData}/>}
        {step === 5 && <StepFive nextStep = {nextStep} prevStep = {prevStep} updateFormData = {updateFormData}/>}
        {step === 6 && <StudentList formData = {formData}/>}
    </div>
  )
}

export default MultiStepForm
