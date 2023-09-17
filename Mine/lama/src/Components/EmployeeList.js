import {useEffect, useState} from 'react';
import {getAll} from "./api"; 
import './MainNavigation'
import './EmployeeList.css'
import MainNavigation from './MainNavigation';
import { Link, useNavigate } from 'react-router-dom/dist';

const EmployeeList = () =>{
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        return async () => {
            const response = await getAll();
            setEmployees(response);
            console.log("This is from useEffect", response);
        };
    }, []);

const onUpdate=(id)=>{
navigate("/add")
}

 return (
    <div><MainNavigation/>
        <div className="container">
            <h3 className="text-primary">Employee List</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Email</th>
                        <th>Date of Joining</th>
                        <th>Date of Birth</th>
                        <th>Mobile</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.empid}>
                            <td>{employee.empid}</td>
                            <td>{employee.name}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.department}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.age}</td>
                            <td>{employee.email}</td>
                            <td>{employee.doj}</td>
                            <td>{employee.dob}</td>
                            <td>{employee.mobile}</td>
                            <Link to={`/update/${employee.empid}`} className="btn btn-outline-warning">
                            Update
                            </Link>
                             <a href="#" className='btn btn-danger'>Delete</a>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};
export default EmployeeList;