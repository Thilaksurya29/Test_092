import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Form from './components/Form';
import Disp from './components/Disp';
import 'bootstrap/dist/css/bootstrap.min.css'


function App({props}) {
 const [users,setUser] = useState([]);

 const onAddUser = (user) =>{
  setUser((prevState) => {
    let newState = [...prevState,user];
    return newState;
  });
 };

  return (
    <div>
    <Form onAddUser={onAddUser}/>
    <hr/>
    {users.length && <Disp users={users}/>}
    </div>
  );
}

export default App;
