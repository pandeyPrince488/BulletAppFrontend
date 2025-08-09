import React, { useState } from 'react';
import axios from 'axios';
import '../style.css';
import Head from './Head';

export default function Contact() {
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
      axios
        .post('http://localhost:1234/ClintBooking', user)
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
      <Head />
      <div className="c-bg d-flex align-items-center justify-content-center">
        <div className="container p-5">
          <form className="form" onSubmit={dataSubmit}>
            <h2 className="text-center mb-4 text-light">Book your services</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="form-group mt-1">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`form-control ${errors.cname && 'is-invalid'}`}
                    name="cname"
                    value={user.cname}
                    onChange={inputHandler}
                  />
                  {errors.cname && <div className="invalid-feedback">{errors.cname}</div>}
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`form-control ${errors.cemail && 'is-invalid'}`}
                    name="cemail"
                    value={user.cemail}
                    onChange={inputHandler}
                  />
                  {errors.cemail && <div className="invalid-feedback">{errors.cemail}</div>}
                </div>
                <div className="form-group mt-3">
                  <select
                    className={`form-select ${errors.service && 'is-invalid'}`}
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
                <div className="form-group mt-3">
                  <input
                    type="text"
                    placeholder="Mobile no."
                    className={`form-control ${errors.mobile && 'is-invalid'}`}
                    name="mobile"
                    value={user.mobile}
                    onChange={inputHandler}
                  />
                  {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    placeholder="Special Request or details"
                    name="detail"
                    value={user.detail}
                    onChange={inputHandler}
                  />
                </div>
                <div className="text-center mt-2">
                  <button className="btn btn-danger btn-lg">Book Now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
