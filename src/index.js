import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './Component/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Head from './Component/Head';
import Footer from './Component/Footer';
import Services from './Component/Services';
import Booking from './Component/Booking';
import About from './Component/About';
import Admin_Register from './Component/Admin/Admin_Register';
import Admin_Login from './Component/Admin/Admin_Login';
import Admin from './Component/Admin/Admin';
import Sale from './Component/Sale';
import Add_Bike from './Component/Admin/Add_Bike';
import Contact from './Component/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/head' element={<Head/>} />
    <Route path='/footer' element={<Footer/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/booking' element={<Booking/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/Aregister' element={<Admin_Register/>} />
    <Route path='/Alogin' element={<Admin_Login/>} />
    <Route path='/aWelcome' element={<Admin/>} />
    <Route path='/sale' element={<Sale/>} />
    <Route path='/addBike' element={<Add_Bike/>} />
  </Routes>
  </BrowserRouter>
);


