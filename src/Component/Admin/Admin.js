import React, { useEffect, useState } from 'react'
import Head from '../Head';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Admin() {

  var data = JSON.parse(localStorage.getItem('aid'));
  console.log(data);

  const[product,setProduct]=useState([]);

  function fetchData(){
    axios.get("http://localhost:1234/fetchDetail")
    .then(res=>{
         console.log(res.data)
        setProduct(res.data);
    }).catch(err=>{console.log(err)})
  }

  useEffect(()=>{
    fetchData();
},[])

  return (
    <div>
       <Head/>
      <div className='text-center mt-3'>
        <h2>Welcome {data.yname}</h2>
        </div>

        <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-12'>
                <table id='' className='table table-striped table-bordered' 
                style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Mobile</th>
                            <th>Detail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                                product.map(booking=>
                                    <tr key={booking._id}>
                                        <td>{booking.cname}</td>
                                        <td>{booking.cemail}</td>
                                        <td>{booking.service}</td>
                                        <td>{booking.mobile}</td>
                                        <td>{booking.detail}</td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    
                </table>
            </div>
        </div>
        <Link to="/addBike"><button className='btn btn-success text-light'>Add Bike</button></Link>
      </div>
    </div>
  )
}
