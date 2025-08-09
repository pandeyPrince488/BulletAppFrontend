import React from 'react'
import Head from './Head'
import Carousel from 'react-bootstrap/Carousel';
import './about.css';
import Footer from './Footer';


import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
  } from "mdb-react-ui-kit";

export default function About() {
  return (
    <>
    <Head/>

    {/* <!-- Carousel Start --> */}
    <Carousel  className='set'>
                    <Carousel.Item className='set-img' >
                        <img   src="images/RE-riding.jpg"/>
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item className='set-img'>
                        <img width={900} height={500} alt="900x500" src="images/RE-carousel-1.jpg"/>
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item >
                    {/* <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="src/assets/Maison_en_construction_Demoli.jpg"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
    {/* <!-- Carousel End --> */}

    <div className='container-fluid ud'>
        <div className='container pt-5'>
            <h2 className='text-center'>Latest Blog</h2>
            <p className='text-center'>Welcome to our premier bike workshop offering expert repairs, custom builds, and top-notch maintenance services
            <br/> Trust our skilled technicians for precision tuning, quality parts.</p>
            
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card shadow'>
            <div className='row'>
            <div className='col-md-5 '>
                <img 
            className='float-left'
            src="/images/bike2.jpg"
            alt="Card image"
            width="100%"
            height="195"/>
            </div>
            <div className='col-md-7  '>
                <h3 className='mt-2'>Why Bike servicing is important?</h3><br/>
                <p>Bike service ensures preventive measures that might attack engines and other mechanicals in top-notch condition.</p>
                </div>
            </div>
            </div>
            </div>

            <div className='col-md-6'>
                <div className='card shadow'>
            <div className='row'>
            <div className='col-md-5 '>
                <img 
            className='float-left'
            src="/images/bike1.jpg"
            alt="Card image"
            width="100%"
            height="195"/>
            </div>
            <div className='col-md-7  '>
                <h3 className='mt-2'>Why Bike maintenance is important?</h3><br/>
                <p>A well-maintained bike will keep you safe, save you money, and ensure smooth riding.</p>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
      <br/>
    <hr/>
    {/* Testimonials */}
    <MDBContainer className="py-3">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          A testimonial is an honest endorsement of your product or 
          service that usually comes from a customer, colleague, or peer who 
          has benefited from or experienced success as a result of the work you did for them.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Arya Sinha</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Exceptional bike workshop with a team of skilled technicians providing top-tier repairs and excellent customer service. 
                Extensive range of high-quality products available, making it a premier destination for cyclists.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Neha Singh</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Premier bike workshop known for skilled technicians, top-notch repairs, and superb customer service. Wide selection of 
                quality products available, ensuring a satisfying experience for all cyclists
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                className="rounded-circle img-fluid"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Shivam Sharma</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                This Bike Workshop offers exceptional service, knowledgeable staff, and timely repairs. Customers rave about their 
                professionalism and attention to detail, making it a top choice for bike enthusiasts.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    <Footer/>
    </>
  )
}
