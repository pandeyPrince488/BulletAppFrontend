import React from 'react'
import Head from './Head'
import Booking from './Booking'
import '../style.css';
import Footer from './Footer';

export default function Services() {
  return (
    <>
    <Head/>
    <div className="container-fluid ">
  <div className="row bg-danger servWH ">
    <div className="col-md-4 serv-bg ">
      <div className="con ">
     <h2 className="serv-locate ">Book a Service</h2> 
     {/* <p>Calculate the cost of service for your motorcycle</p> */}
     </div>
    </div>
    <div className="col-md-4 quality-bg">
    <div className="con">
     <h2 className="serv-locate ">Visit our Store</h2> 
     {/* <p>Calculate the cost of service for your motorcycle</p> */}
     </div>
    </div>
    <div className="col-md-4 equipment-bg">
    <div className="con ">
     <h2 className="serv-locate ">Better Consultancy</h2> 
     {/* <p>Calculate the cost of service for your motorcycle</p> */}
     </div>
    </div>
  </div>
</div>

<div className='row bg-dark'>
    <h4 className='text-light text-center p-2'>Royal Enfield Service</h4>
</div>

<Booking/>
<Footer/>
    </>
  )
}
