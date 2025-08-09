import React from 'react'
import Head from './Head'
import axios from 'axios'
import { useEffect,useState} from 'react';

export default function Sale() {

  let data = JSON.parse(localStorage.getItem('bd'));
  console.log(data);

  const[product,setProduct]=useState([]);

  function fetchData(){
    axios.get("http://localhost:1234/fetchBikedetail")
    .then(res=>{
        console.log(res.data)
        setProduct(res.data);
    }).catch(err=>{console.log(err)});
 }

 useEffect(()=>{
    fetchData();
 },[])

  return (
    <>
    <Head/>

    <div className="container-fluid  mt-4">
    <div className="row  mlr-3">

     {product.map((baddmodel, index) => {
      return(
        <>
     <div className="col-md-4 mt-2 mb-3" >
     <div className="card bg-dark select text-white" style={{ width: 400 }}>

     <img
            className="card-img-top"
            src={`http://localhost:1234/${baddmodel.attachment}`}
            alt="Card image"
            width="10px"
            height="300px"
          />
          <div className="card-body  ">
            <h4 className="card-title ul font-weight-bold">
              {baddmodel.bname}
            </h4>
            <p className="card-text">
              {baddmodel.description}
            </p>
            <hr />
            <div className="row ">
              <div className="col-6 text-left">Mileage:- {baddmodel.mileage} kmpl</div>
              <div className="col-6 text-right">
                <h5 className="text-danger "> &#8377; {baddmodel.price}</h5>
              </div>
            </div>
            
     </div>
          </div>
    </div>

          </>
      );
          })}
    </div>
    </div>
    </>
  )
}
