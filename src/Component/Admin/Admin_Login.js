import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';

export default function Admin_Login() {
  const[user,setUser]=useState();
  const Navigate=useNavigate();

  const inputHandler=(e)=>{
      return setUser({...user,[e.target.name]:e.target.value})
  }

  const loginUser=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:1234/adminLogin",user)
    .then(res=>{
      var result = res.data;
      Navigate('/aWelcome')
      localStorage.setItem("aid",JSON.stringify(result));
    }).catch(err=>{alert(err.response.data.error)});
}

  return (
    <div className='container mt-5'>
     
    <form onSubmit={loginUser}>
    <div className='row justify-content-center'>
        <div className='col-md-4 border p-4'>
  <h4>Admin Login</h4>
  <div className='form-group'>
    <input type='text' placeholder='Your Name' className='form-control' 
    name='yname' value={user?.yname} onChange={inputHandler}/>
  </div>
  <div className='form-group mt-2'>
    <input type='text' placeholder='Password' className='form-control' 
    name='password' value={user?.password} onChange={inputHandler}/>
  </div>
  <div className='form-group mt-2'>
  <button className='btn btn-primary'>Login</button>
  </div>

  <Link to="/Aregister">New User?</Link>
  </div>
</div>
</form>
</div>
  )
}
