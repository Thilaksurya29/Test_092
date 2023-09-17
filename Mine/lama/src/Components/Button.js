import React from 'react'
import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const Button = (props) =>{
    const [counter, setCounter] = props;
    const handleClick=()=>{
        setCounter(counter+1);
    }
    return(
        <div><button className='btn btn-primary' onClick={(handleClick)}>{counter}</button></div>
    )
}

export default Button;
