import React from 'react'
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaMapMarkerAlt,FaCertificate,FaUsersCog,FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Address</h4>
          <p className="mb-2">
            {/* <i className="fa fa-map-marker-alt me-3" /> */}
            shop no-3, Keshav sadan,plot no-E92,Sector-12E,koperkhairne,navi Mumbai-400709
          </p>
          <p className="mb-2">
            {/* <i className="fa fa-phone-alt me-3" /> */}
            9323759952
          </p>
          <p className="mb-2">
            {/* <i className="fa fa-envelope me-3" /> */}
            rbroyalservice@gmail.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.facebook.com/rbroyalservice">
              <FaFacebookF/>
            </a>
            <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.instagram.com/rb_royal_service/">
            <FaInstagram/>
            </a>
            <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.linkedin.com/company/rb-royal-service/">
            <FaLinkedinIn/>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Opening Hours</h4>
          <h6 className="text-light">Monday - Friday:</h6>
          <p className="mb-4">09.00 AM - 09.00 PM</p>
          <h6 className="text-light">Saturday - Sunday:</h6>
          <p className="mb-0">09.00 AM - 12.00 PM</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Services</h4>
          <a className=" text-light text-decoration-none " >
            Diagnostic Test
          </a><br/>
          <a className=" text-light text-decoration-none " >
            Engine Servicing
          </a><br/>
          <a className=" text-light text-decoration-none" >
            Tires Replacement
          </a><br/>
          <a className=" text-light text-decoration-none" >
            Oil Changing
          </a><br/>
          <a className=" text-light text-decoration-none" >
            Vacuam Cleaning
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Newsletter</h4>
          <p>Stay in the loop with our newsletter - pedal into exclusive updates, cycling tips, and exciting offers, delivered straight 
            to your inbox for a ride you won't want to miss!</p>
          {/* <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            {/* <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-danger py-1 position-absolute top-0 end-0 mt-2 me-2"
              
            >
              <Link to="/Alogin" className='text-decoration-none text-light'>Admin</Link>
            </button> 
          </div> */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                       <br />
                      </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu text-decoration-none">
              <a className='text-decoration-none' href="">Home</a>
              <a className='text-decoration-none' href="">Cookies</a>
              <a className='text-decoration-none' href="">Help</a>
              <a className='text-decoration-none' href="">FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</>

  )
}
