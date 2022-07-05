import React from "react";
import "./resetPassword.css";
import {useParams, useNavigate} from "react-router-dom"
import authService from "../../services/auth.service";
import { useState } from "react";

function ResetPassword() {
  const accessToken = useParams()
  const [password, setPassword] = useState("")
  
  const navigate = useNavigate()

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await authService.resetPassword(accessToken, password)
      .then(
        () => {
          navigate("/");
          setPassword("");
        }
      )
    } catch (error) {
      
    }
  };

  return (
    <div className="login-bg d-flex align-items-center">
      <div className="container d-flex justify-content-center align-items-center p-3">
        <form
          className="form-login d-flex flex-column align-items-center"
          onSubmit={handleReset}
        >
          <div className="form-header mb-4">
            <h3>Reset your password</h3>
          </div>
          <div className=" d-flex flex-column w-100 p-2 px-sm-5 mb-4 ">
            <label htmlFor="password" className="mb-3">
              New Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="mb-4 shadow-none form-input"
              required
              autoFocus
              autoComplete="off"
            />

           
            <button type="submit" className="submit-btn">
              Reset Password
            </button>
            <p className="text-center m-3">or</p>

            <button className="socialMedia-btn">Continue with Facebook</button>
            <button className="socialMedia-btn">Continue with Apple</button>
            <button className="socialMedia-btn">Continue with Twitter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
