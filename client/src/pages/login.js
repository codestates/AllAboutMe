import React from 'react';
import Footer from './footer';
import './login.css'


function login(){
  return (
    <div className="login-container">
    <div className="login-logo">Login</div>
        <input 
        className="login-input"
        placeholder="ID (email)"
        type="email"
        >
        </input>
    <div>
        <input 
        className="login-input"
        placeholder="Password"
        type="password"
        >
        </input>
    </div>
    <button className="login-button">Login</button>
    <footer className='login_footer'>
        <Footer />
    </footer>
</div>
)
};

export default login;