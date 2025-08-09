import React, { useState } from 'react';
import axios from 'axios';
import '../style.css';

export default function Booking() {
  const [user, setUser] = useState({
    cname: '',
    cemail: '',
    service: '',
    mobile: '',
    detail: ''
  });

  const [errors, setErrors] = useState({});

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const dataSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!user.cname.trim()) {
      validationErrors.cname = 'Your name is required';
    }

    if (!user.cemail.trim()) {
      validationErrors.cemail = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(user.cemail)) {
      validationErrors.cemail = 'Invalid email address';
    }

    if (!user.service.trim()) {
      validationErrors.service = 'Service is required';
    }

    if (!user.mobile.trim()) {
      validationErrors.mobile = 'Mobile No. is required';
    } else if (!/^\d{10}$/.test(user.mobile)) {
      validationErrors.mobile = 'Mobile number is not valid';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission if there are no validation errors
      axios.post('http://localhost:1234/ClintBooking', user)
        .then((res) => {
          alert(res.data.msg);
        })
        .catch((err) => {
          alert(err.data.error);
        });
    }
  };

  return (
    <>
      {/* Booking Start */}
      <div className="container-fluid bg-secondary booking wow fadeInUp" data-wow-delay="0.1s" id="contact">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="text-white mb-4">Certified and Award Winning Bike Repair Service Provider</h1>
                <p className="text-white mb-0">
                  Have a question or ready to embark on your biking journey? Our team is here to help! Drop us a line,
                  swing by our workshop, or give us a ring - we're geared up and ready to assist. Your cycling
                  adventure starts with a simple reach-out to our friendly experts.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                <h1 className="text-white mb-4">Book For A Service</h1>
                <form onSubmit={dataSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className={`form-control border-0 ${errors.cname && 'is-invalid'}`}
                        placeholder="Your Name"
                        name="cname"
                        value={user.cname}
                        onChange={inputHandler}
                      />
                      {errors.cname && <div className="invalid-feedback">{errors.cname}</div>}
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className={`form-control border-0 ${errors.cemail && 'is-invalid'}`}
                        placeholder="Your Email"
                        name="cemail"
                        value={user.cemail}
                        onChange={inputHandler}
                      />
                      {errors.cemail && <div className="invalid-feedback">{errors.cemail}</div>}
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className={`form-select border-0 ${errors.service && 'is-invalid'}`}
                        name="service"
                        value={user.service}
                        onChange={inputHandler}
                      >
                        <option value="">Select A Service</option>
                        <option value="servicing">Servicing</option>
                        <option value="wash">Washing</option>
                        <option value="paint">Painting</option>
                      </select>
                      {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className={`form-control border-0 ${errors.mobile && 'is-invalid'}`}
                        placeholder="Mobile no."
                        name="mobile"
                        value={user.mobile}
                        onChange={inputHandler}
                      />
                      {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control border-0"
                        placeholder="Special Request or details"
                        name="detail"
                        value={user.detail}
                        onChange={inputHandler}
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-danger w-100 py-3">Book Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking End */}
    </>
  );
}
