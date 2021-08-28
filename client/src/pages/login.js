import React, { useState } from "react";
import axios from "axios";
import Footer from "./footer";
import "./login.css";

axios.defaults.withCredentials = true;

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("안녕하세요");
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    const { email, password } = loginInfo;

    if (!email || !password) {
      setMessage("이메일과 비밀번호를 입력하세요");
      return;
    }

    axios
      .post(
        "https://localhost:4000/signin",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 201) console.log("login OK");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-container">
      <div className="login-logo">Login</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="login-input"
          placeholder="ID (email)"
          type="email"
          onChange={handleInputValue("email")}
        ></input>
        <div>
          <input
            className="login-input"
            placeholder="Password"
            type="password"
            onChange={handleInputValue("password")}
          ></input>
        </div>
        <div>
          <div className="signup-notice-message-box">
            <div>{message}</div>
          </div>
        </div>
        <button className="login-button" type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
      <footer className="login_footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Login;
