import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../components/LandingPage";
import { SignIn } from "../components/SignIn";
import MultiStepForm from "../components/MultiStepForm";
import StudentList from "../components/StudentList";

export const AppRouter = () => {
  return (
        <Routes>
            <Route path="/" element = {<LandingPage />}/>
            <Route path="/SignUp" element = {<MultiStepForm />}/>
            <Route path="/Signin" element = {<SignIn />}/>
            <Route path="/StudentList" element = {<StudentList />}/>
        </Routes>
  )
}
