import axios from "axios";
const addEmployee = async (employee) => {
    const response = await axios.post(
        "http://localhost:8080/api/employees/add",
        employee
    );
};
const addItem = async (item) => {
    const response = await axios.post(
        "http://localhost:8080/api/employees/item",
        item
    );
};

const addLoan = async (loan) => {
    const response = await axios.post(
        "http://localhost:8080/api/employees/add",
        loan
    );
};


const getAll = async () => {
    const response = await axios.get("http://localhost:8080/api/employees/getall");
    console.log("This is from get All", response.data);
    return response.data;
};

const getLoan = async () => {
    const response = await axios.get("http://localhost:8080/api/employees/getLoan");
    console.log("This is from get All", response.data);
    return response.data;
};
const getItem = async () => {
    const response = await axios.get("http://localhost:8080/api/employees/getItem");
    console.log("This is from get All", response.data);
    return response.data;
};

const login = async (credentials) => {
    const response = await axios.post("http://localhost:8080/api/users/signin",
    credentials
    );
};

const register = async (credentials) => {
    const response = await axios.post("http://localhost:8080/api/users/signup",
    credentials
    );
}
const getById=async (empid)=>{
    const response=await axios.get(`http://localhost:8080/api/employees/${empid}`)
    return response.data;
}
const getByItem=async (itemid)=>{
    const response=await axios.get(`http://localhost:8080/api/employees/${itemid}`)
    return response.data;
}

const updateEmployee=async (employee)=>{
    const res=await axios.put(`http://localhost:8080/api/employees/update`,employee)
    return res.data;
}

export {addEmployee, getAll, login, register, getLoan, addLoan, addItem, updateEmployee, getById, getItem, getByItem};








