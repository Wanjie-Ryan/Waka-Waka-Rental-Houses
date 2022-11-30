import React from 'react'
import Landing from '../src/frontend/routes/Landing.jsx'
import Login from '../src/frontend/routes/login.jsx'
import Register from '../src/frontend/routes/register.jsx'
import Layout from '../src/frontend/routes/layout.jsx'
import About from '../src/frontend/routes/about.jsx'

import Location from './frontend/routes/location.jsx'
import './index.css'
// import Properties from '../src/frontend/routes/properties.jsx'
import Contact from '../src/frontend/routes/contact.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <>

          <BrowserRouter>
            <Routes>

              <Route path = '/' element = {<Layout/>}/>

              
              <Route index element={<Landing/>} />
              

              <Route path = 'Login' element = {<Login/> }/> 
             <Route path ='Register' element = {<Register/>}/>
              {/* <Route path ='Properties' element = {<Properties/>}/> */}
              <Route path ='About' element = {<About/>}/>
              <Route path = 'Contact' element ={<Contact/>}/>

              <Route path = 'Location' element = {<Location/>}/>
              

              {/* <Route path ='about' element = {<About/>}
              <Route path = 'login' element = {<Contact/>} */}

            </Routes>
          
          </BrowserRouter>

            

    </>
  );
}

export default App;
