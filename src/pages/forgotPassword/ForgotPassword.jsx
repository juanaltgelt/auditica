import { useState, useRef, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import "./forgotpassword.css";
import authService from "../../services/auth.service";


const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const emailRef = useRef();

    const navigate = useNavigate()

    useEffect(() => {
        emailRef.current.focus();
      }, []);

    const handleRecovery = async (e) => {
        e.preventDefault()
        try {
            await authService.recoveryEmail(email).then((response) => {
            console.log(response);
              navigate("/login");
              setEmail("");

            });
          } catch (e) {
            console.log(e)
            }
          }

    return (
        <div className="login-bg d-flex align-items-center">
        <div className="container d-flex justify-content-center align-items-center p-3">
          <form
            className="form-login h-auto d-flex flex-column align-items-center"
            onSubmit={handleRecovery}
          >
            <div className="form-header mb-1  d-flex flex-column align-items-center">
              <h3>Reset your password</h3>
              <p className="text-center w-75 forgot-text">
              Please enter your email address. You will receive a link to create a new password via email.
            </p>
            </div>
            <div className=" d-flex flex-column w-100 p-2 px-sm-5 mb-4 ">
              <label htmlFor="email" className="mb-3">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                placeholder="Enter your email"
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
    )
}

export default ForgotPassword;