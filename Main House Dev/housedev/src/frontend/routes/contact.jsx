
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "../routes/contact.css";
import ReactWhatsapp from "react-whatsapp";
import { useState } from "react";

function Contact() {


  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    ta: ""
    
  });

  function changeHandler(event) {
    setData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }





  return (
    <>
      <main className="main-sec">
        <header className="about-header">
          <div className="title"> Waka Waka Managers</div>

          <ul className="list">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/about">
              <li>About</li>
            </Link>

            <Link to="/contact">
              <li>Contact</li>
            </Link>

            <Link to="/register">
              <li>Register</li>
            </Link>

            <Link to="/Login">
              <li>Log In</li>
            </Link>
          </ul>
        </header>

        <section className="experience">
          <div className="improve">
            <p>
              Help us Improve our services by sharing your Experience with us.{" "}
            </p>
          </div>
        </section>

        <section className="plea">
          <div className="plea-fname">
            <label htmlFor="fname" className="fName">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              className="inputarea"
              placeholder="Enter Your FirstName"
              onChange={changeHandler}
              value ={data.fname}
            />
          </div>

          <div className="plea-fname">
            <label htmlFor="lname" className="fName">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              className="inputarea"
              placeholder="Enter Your LastName"
              onChange={changeHandler}
              value = {data.lname}
            />
          </div>

          <div className="plea-fname">
            <label htmlFor="email" className="fName">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              className="inputarea"
              placeholder="Enter Your EmailAddress"
              onChange={changeHandler}
              value = {data.email}
            />
          </div>

          <div className="plea-fname">
            <label htmlFor="ta" className="fName">
              Your View
            </label>
            <textarea
              className="inputarea"
              placeholder="Enter Your View on any matter related to WakaWaka Services"
              name ='ta'
              onChange={changeHandler}
              value ={data.ta}
            ></textarea>
          </div>
        </section>

        <div className="sub">
          <button>Send</button>
        </div>

        <div className="map">
          <ReactWhatsapp
            number="+254-791-618-714"
            className="whatsapp"
            message="Hello, Inquiry of Waka Waka Services!"
          >
            {" "}
            <p>Reach us on Whatsapp <FontAwesomeIcon icon={faWhatsapp} className="fw" /></p>
            
            {" "}
          </ReactWhatsapp>
          <p>
            {" "}
            You can Find us in Machakos, Machakos University. Directions are as
            below.{" "}
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3953871976764!2d37.26146007898839!3d-1.5302635234302229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f8724f42e161f%3A0xaf5f3242fb4d6ecb!2sMachakos%20University!5e0!3m2!1sen!2ske!4v1668341216572!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <footer className="sign-o">
          <p className="tt">
            {" "}
            Bringing Like Minds Together, The Future is Here With Us.
          </p>

          <div className="off">
            <div className="inner-off">
              <p className="reach">Reach us on: </p>

              {/* when linking your component to an externl source eg. Youtube, use a href as below but when linking your components internally in react use link to tags */}

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon icon={faYoutube} className="fa" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noreferrer">
                {" "}
                <FontAwesomeIcon icon={faGithub} className="fa" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="fa" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="fa" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="fa" />
              </a>
            </div>

            <div className="Thanks">
              <p className="fw"> Developers </p>

              {/* when react is rendering a link tag it is rendered as an a tag */}

              <p>
                {" "}
                <Link to="/about"> &#9830; Wanjie Ryan </Link>
              </p>
              <p>
                {" "}
                <Link to="/about"> &#9830; Cornelius Mutuku</Link>
              </p>
              <p>
                {" "}
                <Link to="/about"> &#9830; Samuel Waithaka</Link>
              </p>
              <p>
                {" "}
                <Link to="/about"> &#9830; Kelvin Maina</Link>
              </p>
              <p>
                {" "}
                <Link to="/about"> &#9830; Cheryuiot Kipngetich</Link>
              </p>
              <p>
                {" "}
                <Link to="/about"> &#9830; Wycliffe Mutisya</Link>
              </p>
            </div>

            <div className="work">
              <p className="fw"> Find Work </p>

              <p> &#9830; As a Developer </p>
              <p> &#9830; As a Surveyer </p>
              <p> &#9830; As a House Manager </p>
              <p> &#9830; As a Consultant </p>
            </div>

            <div className="links">
              <p className="fw"> Useful Links</p>

              <p>
                {" "}
                <Link to="/"> &#9830; Home</Link>
              </p>
              <p>
                {" "}
                <Link to="/about"> &#9830; About</Link>
              </p>
              <p>
                {" "}
                <Link to="/contact"> &#9830; Contact</Link>
              </p>
              <p>
                {" "}
                <Link to="/register"> &#9830; Register</Link>
              </p>
              <p>
                {" "}
                <Link to="/login">&#9830; Login </Link>
              </p>
            </div>

            <div className="others">
              <p> Privacy Policy statement</p>
              <p> Terms and Conditions </p>
              <p>Locate Plots</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Contact;
