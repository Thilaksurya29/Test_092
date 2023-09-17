import React from "react"
import './Login.css'
import {login} from './api.js'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>


const Login = () => {
  
  const[userid, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const navigate = useNavigate();
  const onUsernameChange=(e)=>{
    setUsername(e.target.value);
  }
  const onPasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
        userid, password,
    }; 
    console.log(credentials);
    await login(credentials)
    navigate("/emp")
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group ">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control "
              placeholder="Username"
              onChange={onUsernameChange}
            />
          </div>
          <br/>
          <div className="form-group ">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={onPasswordChange}
            />
          </div>
          <br/>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
          <br/>
          <p className="text-primary">
          <a href="./reg"> New User</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;