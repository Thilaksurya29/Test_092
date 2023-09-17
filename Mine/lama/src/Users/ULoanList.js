import {useEffect, useState} from 'react';
import {getLoan} from "../Components/api"; 
import { useNavigate } from 'react-router-dom/dist';

const LoanList = () =>{
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        return async () => {
            const response = await getLoan();
            setLoans(response);
            console.log("This is from useEffect", response);
        };
    }, []);

 return (
        <div className="container">
            <h3 className="text-primary">ELoan List</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Loan Id</th>
                        <th>Loan Type</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map((loan) => (
                        <tr key={loan.loanid}>
                            <td>{loan.loantype}</td>
                            <td>{loan.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default LoanList;