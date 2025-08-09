import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Admin_Register() {
    const[user,setUser]=useState("");

    const inputHandler=(e)=>{
      return setUser({...user,[e.target.name]:e.target.value});
    }

    const dataSubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:1234/adminRegister",user)
      .then(res=>{
        alert(res.data.msg);
      }).catch(err=>{alert(err.response.data.error)});
    }
  
  return (
    <div className='container mt-5'>
    <form onSubmit={dataSubmit}>
    <div className='row justify-content-center'>
        <div className='col-md-4 border p-4'>
  <h4>Admin Register</h4>
  <div className='form-group mt-2'>
    <input type='text' placeholder='Id' className='form-control' name='id' value={user?.id}
    onChange={inputHandler}/>
  </div>  
  <div className='form-group mt-2'>
    <input type='text' placeholder='Your Name' className='form-control' name='yname' value={user?.yname}
    onChange={inputHandler}/>
  </div>
  <div className='form-group mt-2'>
    <input type='text' placeholder='Mobile' className='form-control' name='mobile' value={user?.mobile}
    onChange={inputHandler}/>
  </div>
  <div className='form-group mt-2'>
    <input type='password' placeholder='Password' className='form-control' name='password' value={user?.password}
    onChange={inputHandler}/>
  </div>
  <div className='form-group mt-2'>
    <button className='btn btn-primary'>Login</button>
  </div>

  <Link to="/Alogin">Already Registered!</Link>
  </div>
</div>
</form>
</div>
  )
}
