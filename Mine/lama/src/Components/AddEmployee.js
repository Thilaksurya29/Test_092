import {useState, useEffect, useParams} from 'react';
import './AddEmployee.css'
import { addEmployee } from './api';
import MainNavigation from './MainNavigation';
import { useNavigate } from 'react-router-dom';
 const AddEmployee = () => {
    const[empid,setEmpid] = useState("");
    const[name,setName] = useState("");
    const[gender,setGender] = useState("");
    const[department,setDepartment] = useState("");
    const[designation,setDesignation] = useState("");
    const[age,setAge] = useState("");
    const[email,setEmail] = useState("");
    const[doj,setDoj] = useState("");
    const[dob,setDob] = useState("");
    const[mobile,setMobile] = useState("");

 const navigate = useNavigate();
 
 const onEmpidChange = (e) => {
    setEmpid(e.target.value);
 }
 const onNameChange = (e) => {
    setName(e.target.value);
 }
 const onGenderChange = (e) => {
    setGender(e.target.value);
 }
 const onAgeChange = (e) => {
    setAge(e.target.value);
 }
 const  onDepartmentChange = (e) => {
    setDepartment(e.target.value);
 }
 const onDesignationChange = (e) => {
    setDesignation(e.target.value);
 }
 const onEmailChange = (e) => {
    setEmail(e.target.value);
 }
 const onDojChange =(e) => {
    setDoj(e.target.value);
 }
 const onDobChange = (e) => {
    setDob(e.target.value);
 }
 const onMobileChange = (e) => {
    setMobile(e.target.value);
 }

const handleAddEmployee = async (e) => {
    e.preventDefault();
    const employee = {
       empid, name, gender, department, designation, age, email, doj, dob, mobile,
    };
    await addEmployee(employee)
    navigate("/emp")
}

 return (
    <div><MainNavigation/>
    <div class='container'>
    <div class="login-form">
    <h3 className="text-primary"> Add Employee</h3>
    <form name="login" onSubmit={handleAddEmployee}>
        <input type="text"  class="input" onChange={onEmpidChange}  pattern="[A-Za-z][0-9]{5}" title = "Pattern not matched" required/><br/>
    <label className="form-label">Name</label>
        <input type="text" class="input" required onChange={onNameChange}></input>
    <label className="form-label">Gender</label>
            &nbsp;&nbsp;
            <div className="form-check-inline">
                <input type="radio" className="form-check-input" name="gender" value="Male"  required onChange={onGenderChange}></input>
                <label className="form-check-label">Male</label>
            </div>
            <div className="form-check-inline">
                <input type="radio" className="form-check-input" name="gender" value="Female" onChange={onGenderChange}></input>
                <label className="form-check-label">Female</label>
                </div><br/>
    <label className="form-label">Department</label>
      <input type="text" class="input" required onChange={onDepartmentChange}></input>
      <label className="form-label">Designation</label>
                <input type="text" class="input" required onChange={onDesignationChange}></input>
        <label className="form-label">Age</label>
          <input type="text" class="input" required onChange={onAgeChange}></input>   
          <label className="form-label">Email Id</label>
                <input type="email" class="input" required onChange={onEmailChange}></input>
        <label className='form-label'>Date Of Joining</label>
        <input type="date" class="input" required onChange={onDojChange}></input>
        <label className='form-label'>Date Of Birth</label>
                <input type="date" class="input" required onChange={onDobChange}></input>
                <label className='form-label'>Mobile Number</label>
                <input type="text" class="input" pattern="([9,8,7,6]{1}[0-9]{9})" title="Wrong number" onChange={onMobileChange}></input><br/>
                <button className='btn btn-primary'>Add Employee</button>
    </form>
    </div>
    </div>
    </div>
   );
 };

 export default AddEmployee;