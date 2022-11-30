import React from "react";
import Landing from "./routes/Landing";
import About from './routes/about.jsx'
import Contact from './routes/contact.jsx'
import Login from "./routes/login.jsx";
import Register from "./routes/register";
import Layout from "./routes/layout";
import Properties from "./properties/properties";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singleproperty from "./properties/Singleproperty";
import LandlordRegister from "./landlord/pages/LandlordRegister";
import LandlordLogin from "./landlord/pages/LandlordLogin";
import Home from "./landlord/panel/home/Home";
import New from "./landlord/panel/new/New";
import { buildingInputs, userInputs } from "./formsource";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Landing />} />
          <Route path="Login" element={<Login />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Register" element={<Register />} />
          <Route path="Properties" element={<Properties />} />
          <Route path="properties/:id" element={<Singleproperty />} />
          <Route path="landlordRegister" element={<LandlordRegister />} />
          <Route path="landlordLogin" element={<LandlordLogin/>}/>

          <Route path="landlordhome" element={<Home/>}/>
          <Route path="uploadnew" element={<New inputs={buildingInputs} title="Add New Building"/>}/>
          {/* <Route path ='about' element = {<About/>}
          <Route path = 'login' element = {<Contact/>} */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
