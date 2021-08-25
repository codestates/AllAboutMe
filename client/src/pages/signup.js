import React from "react";
import './signup.css'

function SignUp(){
    
    return (
        <div className="container">
            <div className="signup-logo">Sign up</div>
                <input 
                className="signup-input"
                placeholder="ID (email)"
                type="email"
                >
                </input>
            <div>
                <input 
                className="signup-input"
                placeholder="Password"
                type="password"
                >
                </input>
            </div>
            <div>
                <input 
                className="signup-input"
                placeholder="Name"
                type="name"
                >
                </input>
            </div>
            <div>
                <input 
                className="signup-input"
                placeholder="Phone Number"
                type="text"
                name="cellPhone"
                id="cellPhone"
                >
                </input>
            </div>
            <div>
                <div className="signup-notice-message">
                    Notice Message
                </div>
            </div>
            <div>
                <div className="signup-notice-message">
                    <input className="signup-checkbox" type="checkbox"/> 
                    <a className="signup-agree">동의합니다.</a>
                </div>  
            </div>
            <button className="signup-button">Sign up</button>
        </div>
    )
};
export default SignUp