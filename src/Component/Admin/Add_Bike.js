import React, { useState } from 'react'
import Head from '../Head';
import axios from 'axios';


export default function Add_Bike() {
  const[aBike,setABike]=useState("");
  const[attachment,setAttachment]=useState();


  const inputHandler=(e)=>{
    return setABike({...aBike,[e.target.name]:e.target.value});
  }

  function uploadImage(e){
    setAttachment(e.target.files[0])
  }
  console.log(attachment);
  
  const dataSubmit=(e)=>{
    e.preventDefault();
    const formdata = new FormData();
      formdata.append("bname",aBike.bname);
      formdata.append("mileage",aBike.mileage);
      formdata.append("description",aBike.description);
      formdata.append("price",aBike.price);
      formdata.append("attachment",attachment);

      axios.post("http://localhost:1234/adding",formdata)
      .then(res=>{
      let result = res.data;
        alert(res.data.Success)
        localStorage.setItem("bd",JSON.stringify(result));
      }).catch(err=>{console.log(err)});
  }

  return (
    <>
<Head/>
    <div className='container my-5'>
    
    <form className='form' onSubmit={dataSubmit}>
      <div className='row'>
        <div className='col-md-6'>
          <h2>Add your bike</h2>
          <div className='form-group mt-4'>
              <input type='text' placeholder='Bike Name' className='form-control'
              name='bname' value={(aBike?.bname)} onChange={inputHandler}/>
            </div>


  <div className="form-group mt-2">
  <input type="text" placeholder="Mileage of Bike in kmpl" className="form-control" name="mileage" 
  value={aBike?.mileage} onChange={inputHandler}/>
 </div>
  
 <div className="form-group mt-2">
  <textarea rows="5" className="form-control" placeholder="Description" 
  name="description" value={aBike?.description} onChange={inputHandler}></textarea>
 </div>

 <div className="form-group mt-2">
  <input type="text" placeholder="Price" className="form-control" name="price" 
  value={aBike?.price} onChange={inputHandler}/>
 </div>

 <div className="form-group">
  <input type="file" className="form-control" name='bikeimg' onChange={uploadImage}/>
 </div>

 <div className="form-group">
 <button className="btn btn-primary" >Submit</button>
 </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}
