import React from "react";
import "./Login.css";

const Login = ()=>{
    return (
        <div id="loginCard" className = "loginCard" >
            <h1>Login</h1>
            <div id = "inputs" className = "inputs">
                <input placeholder="Enter Your Name" className="nameInput" type="text"></input>
                <input placeholder="Enter Your PassWord" className="namePassword" type="password"></input>
            </div>
            <div className="button">
                <button className="login">Login</button>
                <button className="SignUp">Sign Up</button>
            </div>
        </div>
    )
}

export default Login;