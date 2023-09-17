import {useEffect, useState} from 'react';
import {getLoan} from "./api"; 
import './MainNavigation'
import MainNavigation from './MainNavigation';
import { useNavigate } from 'react-router-dom/dist';

const LoanList = () =>{
    const [loans, setLoans] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        return async () => {
            const response = await getLoan();
            setLoans(response);
            console.log("This is from useEffect", response);
        };
    }, []);


const onUpdate=(id)=>{
navigate("/add")
}

 return (
        <div className="container">
            <h3 className="text-primary">ELoan List</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Loan Id</th>
                        <th>Loan Type</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map((loan) => (
                        <tr key={loan.loanid}>
                            <td>{loan.loantype}</td>
                            <td>{loan.duration}</td>
                             <a href="#" className='btn btn-warning' onClick={()=>onUpdate(loan.loanid)} >Edit</a>&nbsp;&nbsp;
                             <a href="#" className='btn btn-danger'>Delete</a>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default LoanList;