import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmployeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import RootLayout from './Components/RootLayout';
import Login from './Components/Login';
import Register from './Components/Register';
import LoanCardData from './Components/LoanCardData';
import LoanList from './Components/LoanList';
import ItemMaster from './Components/ItemMaster';
import UpdateEmployee from './Components/UpdateEmployee';
import ItemList from './Components/ItemList';
import UpdateItem from './Components/UpdateItem';


import ULoanList from './Users/ULoanList'; 
import UItemList from './Users/UItemList';

const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {path: "/", element: <Login/>},
      {path: "/reg", element: <Register/>},
      {path:"/add",element: <AddEmployee/>},
      {path:"/emp",element: <EmployeeList/>},
      {path:"/lcd",element: <LoanCardData/>},
      {path:"/ll",element: <LoanList/>},
      {path:"/item",element:<ItemMaster/>},
      {path:"/il",element:<ItemList/>},
      {path:"/update/:empid",element:<UpdateEmployee/>},
      {path:"/updateitem/:itemid",element:<UpdateItem/>},
      
      {path:"/uil",element: <UItemList/>},
      {path:"/ull",element: <ULoanList/>},

    ],
  },
]);

function App() {
   return <RouterProvider router={router} />
}

export default App;
