import React from "react"
import './LoanCardData.css'
import {addLoan} from './api.js'
import {useState} from 'react';
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>


const LoanCardData = () => {
  
  const[loanid, setLoanid] = useState("");
  const[loantype, setLoantype] = useState("");
  const[duration, setDuration] = useState("");

  const onLoanidChange=(e)=>{
    setLoanid(e.target.value);
  }
  const onLoantypeChange=(e)=>{
    setLoantype(e.target.value);
  }
  const onDurationChange=(e)=>{
    setDuration(e.target.value);
  }


  const handleLoan = async (e) => {
    e.preventDefault();
    const loan = {
        loanid, loantype, duration
    }; 
    console.log(loan);
    await addLoan(loan)
   
  }

  return (
    <div class="container">
      <div class="login-form">
      <form name="login" onSubmit={handleLoan}>
          <h3 className="Auth-form-title">Loan Cards Master Data Details</h3>
          <label className="form-label">Loan ID</label>
           <input type="text" class="input" required onChange={onLoanidChange}></input>
          <br/>
            <label className="form-label">Loan Type</label>
            <select
              className="form-control"
              onChange={onLoantypeChange}>
              <option value="text">Furniture</option>
              <option value="text">Home</option>
              <option value="text">Gold</option>
              <option value="text">Education</option>
              <option value="text">Vehicle</option>
              </select>
          <br/>
            <label className="form-label">Duration</label>
            <select
              id="inputType"
              className="form-control"
              onChange={onDurationChange}>
              <option value="text">2</option>
              <option value="text">3</option>
              <option value="text">5</option>
              <option value="text">7</option>
              <option value="text">12</option>
              </select>
          <br/>
            <button type="submit" className="btn btn-primary">
              Add data
            </button>
          <br/>
      </form>
      </div>
    </div>
  )
}

export default LoanCardData;