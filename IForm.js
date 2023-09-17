import React, { useState } from 'react'

export default function ({onAddUser}) {

const[name, setName] = useState("");
const[email, setEmail] = useState("");

const onNameChange=(e)=>{
    setName(e.target.value);
}
const onEmailChange=(e)=>{
    setEmail(e.target.value);
}

const onSubmitChange=(e)=>{
    e.preventDefault();
    onAddUser({name,email});
};

  return (
    <div className='container'>
        <h3>FORM</h3>
        <form className='col-4' onSubmit={onSubmitChange}>
            <div className='form-group' >
                <label className='form-label'>NAME</label>
                <input type="text" className='form-control' onChange={onNameChange}/>
            </div>
            <div className='form-group'>
                <label className='form-label'>EMAIl</label>
                <input type="email" className='form-control' onChange={onEmailChange}/>
            </div>
            <br/>
            <button className='btn btn-primary'>SUBMIT</button>
        </form>
    </div>
  )
}
