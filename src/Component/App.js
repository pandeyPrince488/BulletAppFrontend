// import './App.css';
import { FaFacebookF,FaInstagram,FaLinkedinIn,FaMapMarkerAlt,FaCertificate,FaUsersCog,FaTools } from "react-icons/fa";
import { IoMdTime } from 'react-icons/io';
import Head from './Head';
import '../style.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";
import Booking from "./Booking";


function App() {

// const[user,setUser]=useState({
//   cname: '',
//   cemail: '',
//   service: '',
//   mobile: '',
//   detail: ''
// });

// const[errors,setErrors] = useState({})

// const inputHandler=(e)=>{
//   return setUser({...user,[e.target.name]:e.target.value});
// }

// const dataSubmit=(e)=>{
//   e.preventDefault();

//   const validationErrors = {}
//   if(!user.cname.trim()){
//     validationErrors.cname = "Your name is required"
//   }

//   if(!user.cemail.trim()){
//     validationErrors.cemail = "Email required"
//   }

//     if(!user.mobile.trim()) {
//       validationErrors.mobile = "Mobile No. is required"
//   } else if(user.mobile.length > 1 && user.mobile.length < 11){
//       validationErrors.password = "Mobile number is not valid"
//   }

//   setErrors(validationErrors)

//   if(Object.keys(validationErrors).length === 0){

//   axios.post("http://localhost:1234/ClintBooking",user)
//     .then(res=>{
//       alert(res.data.msg);
//     }).catch(err=>{alert(err.data.error)}); 
//   }

//     // setUser("");
// }

  return (
    <>
    <div className="container-fluid bg-dark p-0">
  <div className="row gx-0 d-none d-lg-flex">
    <div className="col-lg-9 px-5 text-start d-inline">
      <div className="h-100 d-inline-flex align-items-center me-1">
      <a className="btn btn-sm-square text-danger me-1">
          <FaMapMarkerAlt/>
        </a>
        <small className="text-light">shop no-3, Keshav sadan,plot no-E92,Sector-12E,koperkhairne,navi Mumbai-400709</small>
      </div>
      <div className="h-100 d-inline-flex align-items-center py-3">
      <a className="btn btn-sm-square text-danger me-1">
         <IoMdTime/>
        </a>
        <small className="text-light">Mon - Fri : 09.00 AM - 09.00 PM</small>
      </div>
    </div>
    <div className="col-lg-3 px-5 text-end">
      <div className="h-100 d-inline-flex align-items-center py-3 me-4">
        <small className="text-light">9323759952</small>
      </div>
      <div className="h-100 d-inline-flex align-items-center">
        <a className="btn btn-sm-square bg-white text-danger me-1" target="_blank" href="https://www.facebook.com/rbroyalservice">
          <FaFacebookF/>
        </a>
        <a className="btn btn-sm-square bg-white text-danger me-1" target="_blank" href="https://www.instagram.com/rb_royal_service/">
          <FaInstagram/>
        </a>
        <a className="btn btn-sm-square bg-white text-danger me-1" target="_blank" href="https://www.linkedin.com/company/rb-royal-service/">
          <FaLinkedinIn/>
        </a>
      </div>
    </div>
  </div>
</div>

<Head/>

{/* <!-- Carousel Start --> */}
<Carousel>
    <Carousel.Item>
      <div className="carousel-item active">
  <img src="images/RE-carousel-3.jpg" alt="Los Angeles" />
</div>
        <div className="carousel-caption d-flex align-items-center">
        <div className='container'>

        <div className="row align-items-center justify-content-center justify-content-lg-start">

  <div className="col-10 col-lg-7 text-center text-lg-start col-md-7">
    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
    // Bike Servicing //
    </h6>
    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
    Qualified Bike Repair Service Center
    </h1>
  </div>
  <div className="col-lg-5 d-none d-lg-flex animated zoomIn col-md-5">
    <img className="img-fluid" src="images/N2PBY7AVF5FVXNNECZW453DBZU-removebg-preview.png" alt="" />
  </div>
</div>

</div>
</div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-item active">
  <img src="./images/RE-carousel-2.jpg" alt="Los Angeles" />
</div>
        <div className="carousel-caption d-flex align-items-center">
        <div className='container'>

        <div className="row align-items-center justify-content-center justify-content-lg-start">

  <div className="col-10 col-lg-7 text-center text-lg-start col-md-7">
    <h6 className="text-white text-uppercase mb-3 animated slideInDown">
      // Bike Servicing //
    </h6>
    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
      Qualified Bike Wash Service Center
    </h1>
  </div>
  <div className="col-lg-5 d-none d-lg-flex animated zoomIn col-md-5">
    <img className="img-fluid" src="images/yamaha-bike-removebg-preview.png" alt="" />
  </div>
</div>

</div>
</div>
        
      </Carousel.Item>
    </Carousel> 

    <>
  {/* About Start */}
  <div className="container-xxl py-5" id="about">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 pt-4" style={{ minHeight: 400 }}>
          <div
            className="position-relative h-100 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <img
              className="position-absolute img-fluid w-100 h-100 border border-danger"
              src="images/bike1.jpg"
              style={{ objectFit: "cover" }}
              alt=""
            />
            <div
              className="position-absolute top--4 end-0 mt-n4 me-n4 py-4 px-5"
              style={{ background: "rgba(0, 0, 0, .08)" }}
            >
              <h1 className="display-4 text-white mb-0">
                15 <span className="fs-4">Years</span>
              </h1>
              <h4 className="text-white">Experience</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h6 className="text-danger text-uppercase">// About Us //</h6>
          <h1 className="mb-4">
            <span className="text-danger">BikeServ</span> Is The Best Place For
            Your Bike Care
          </h1>
          <p className="mb-4">
          Discover a haven for two-wheeled wonders,
Where pedals meet passion and gears sing symphonies.
From tune-ups to overhauls, we spin magic on every wheel,
Crafting journeys that whisper adventure and thrill.
          </p>
          <div className="row g-4 mb-3 pb-3">
            <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex">
                <div
                  className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                  style={{ width: 45, height: 45 }}
                >
                  <span className="fw-bold text-secondary">01</span>
                </div>
                <div className="ps-3">
                  <h6>Professional &amp; Expert</h6>
                  <span>Where professionalism meets expertise, unlocking cycling excellence at every turn.</span>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex">
                <div
                  className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                  style={{ width: 45, height: 45 }}
                >
                  <span className="fw-bold text-secondary">02</span>
                </div>
                <div className="ps-3">
                  <h6>Quality Servicing Center</h6>
                  <span>Where quality meets precision, your ride's sanctuary awaits.</span>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex">
                <div
                  className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                  style={{ width: 45, height: 45 }}
                >
                  <span className="fw-bold text-secondary">03</span>
                </div>
                <div className="ps-3">
                  <h6>Awards Winning Workers</h6>
                  <span>Crafting excellence, one pedal stroke at a time, our award-winning team sets the standard in biking mastery.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
</>

<>
  {/* Fact Start */}
  <div className="container-fluid fact bg-dark my-5 py-5">
    <div className="container">
      <div className="row g-4">
        <div
          className="col-md-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.1s"
        >
          <i className="fa fa-check fa-2x text-white mb-3" />
          <h2 className="text-white mb-2" data-toggle="counter-up">
            1234
          </h2>
          <p className="text-white mb-0">Years Experience</p>
        </div>
        <div
          className="col-md-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.3s"
        >
          <i className="fa fa-users-cog fa-2x text-white mb-3" />
          <h2 className="text-white mb-2" data-toggle="counter-up">
            1234
          </h2>
          <p className="text-white mb-0">Expert Technicians</p>
        </div>
        <div
          className="col-md-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.5s"
        >
          <i className="fa fa-users fa-2x text-white mb-3" />
          <h2 className="text-white mb-2" data-toggle="counter-up">
            1234
          </h2>
          <p className="text-white mb-0">Satisfied Clients</p>
        </div>
        <div
          className="col-md-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.7s"
        >
          <i className="fa fa-car fa-2x text-white mb-3" />
          <h2 className="text-white mb-2" data-toggle="counter-up">
            1234
          </h2>
          <p className="text-white mb-0">Compleate Projects</p>
        </div>
      </div>
    </div>
  </div>
  {/* Fact End */}
</>

<Booking/>

<Footer/>
    </>
  );
}

export default App;
