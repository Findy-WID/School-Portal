import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SignIn } from './SignIn';
import "./formStyles.css"

export const LandingPage = () => {
    const navigate = useNavigate();

  return (
      <div className='landingpage'>
        <div className='lwrapper'>
          <div className="lheader">
            <h1>Welcome To <br /> <span>Findy Genius Academy</span></h1>
            <p>(Centre for Excellence).</p>
          </div>
          <p>At Findy Genius Academy (FGA), we are commited to giving good value.
              <br /> With over 25 years of teaching experience, you can trust us!
          </p>

          <div className="button-group">
              <button onClick={() => navigate("/signIn")}>SignIn</button>
              <button onClick={() => navigate("/signup")}>SignUp</button>
          </div>
        </div>
    </div>
  )
}
