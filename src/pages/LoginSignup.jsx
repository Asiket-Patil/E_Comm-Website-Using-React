import React from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  return (
    <div>
      <div className="loginSignup">
        <div className="loginSignup-container">
          <h1>Sign Up</h1>
          <div className="login-signup-feilds">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder='password' />

          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>login</span>  </p>
            <div className="loginsignup-agree">
              <input type="checkbox" name='' id='' />
              <p>By Continueing i agree the terms of use and privacy Policy</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
