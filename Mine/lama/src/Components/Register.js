import React from "react"
import './Register.css'
import {register} from './api.js'
import {useState} from 'react';


const Login = () => {
  
  const[userid, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const onUsernameChange=(e)=>{
    setUsername(e.target.value);
  }
  const onPasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const credentials = {
        userid, password,
    }; 
    console.log(credentials);
    await register(credentials)
   
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
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
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;