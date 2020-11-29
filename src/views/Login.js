
import React from "react";
// import './Login.scss';
import { Container, Button } from "shards-react";

const Login = () => (
  
    <div  className="auth-container"> 
                <div className="auth-card" >
                    <p className="auth-title" >Login Page</p>
                    <input className="input" id="email" placeholder="Email" type="email" />
                    <input className="input" id="password" placeholder="Password" type="password" />
                    <button className="btn" >Login</button>
                </div> 
                {/* <button>Go to Dashboard</button>  */}
            </div>
 
);


export default Login;