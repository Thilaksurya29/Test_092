import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './AddEmployee.css'
import { addEmployee } from './api';
import MainNavigation from './MainNavigation';
import { useNavigate } from 'react-router-dom';
import { updateEmployee } from './api';
import { getById } from './api';

 const UpdateEmployee = () => {
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
 const params=useParams();

 useEffect(() => {
    return async ()=>{
     const result= await getById(params.empid);
     console.log(result)
     setEmpid(result.empid)
     setName(result.name);
     setGender(result.gender);
     setDepartment(result.department);
     setDesignation(result.designation);
     setAge(result.age);
     setEmail(result.email);
     setDoj(result.doj);
     setDob(result.dob);
     setMobile(result.mobile);
    }
}, []);
 
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
    await updateEmployee(employee)
    navigate("/emp")
}

 return (
    <div><MainNavigation/>
    <div className="container">
        <h3 className="text-primary"> Update Employee</h3>
        <form className="col-4" onSubmit={handleAddEmployee}>
        <div className="form-group">
                <label className="form-label">Employee ID</label>
                <input type="text" className="form-control" pattern="[A-Za-z][0-9]{5}" title = "Pattern not matched" onChange={onEmpidChange}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" required onChange={onNameChange}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Gender</label>
                &nbsp;&nbsp;
                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" name="gender" value="Male"  required onChange={onGenderChange}></input>
                    <label className="form-check-label">Male</label>
                </div>
                <div className="form-check-inline">
                    <input type="radio" className="form-check-input" name="gender" value="Female" onChange={onGenderChange}></input>
                    <label className="form-check-label">Female</label>
                </div>
            </div>
            <div className="form-group">
                <label className="form-label">Department</label>
                <input type="text" className='form-control' required onChange={onDepartmentChange}></input>
            </div>   
            <div className="form-group">
                <label className="form-label">Designation</label>
                <input type="text" className='form-control' required onChange={onDesignationChange}></input>
            </div>        
            <div className="form-group">
                <label className="form-label">Age</label>
                <input type="text" className="form-control" required onChange={onAgeChange}></input>
            </div>
            <div className="form-group">
                <label className="form-label">Email Id</label>
                <input type="email" className="form-control" required onChange={onEmailChange}></input>
            </div>
            <div className='form-group'>
                <label className='form-label'>Date Of Joining</label>
                <input type="date" className="form-control" required onChange={onDojChange}></input>
            </div>
            <div className='form-group'>
                <label className='form-label'>Date Of Birth</label>
                <input type="date" className="form-control" required onChange={onDobChange}></input>
            </div>
            <div className='form-group'>
                <label className='form-label'>Mobile Number</label>
                <input type="text" className='form-control' pattern="([9,8,7,6]{1}[0-9]{9})" title="Wrong number" onChange={onMobileChange}></input>
            </div>
         <br/>
        <button className='btn btn-primary'>Add Employee</button>
        </form>
    </div>
    </div>
   );
 };

 export default UpdateEmployee;