import React from 'react'
import '../routes/about.css'
import { Link } from "react-router-dom";
import image from './managers/ryanpiano.jpeg';
import image2 from '../routes/managers/cornehiking.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";




function About() {


  return (


    <>
     <section className='main-pic'>

          <header className='about-header'>

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


          <section className='missio-statement'>

           <div className='main-p'>

            <p className='missio-statement-p'>Providing a lavish Home to our Customers at a Cost-Friendly Fee. </p>
            <p> Irrespective of race, gender and geography.</p>

           </div>

          </section>

      </section>

      <section className="other-section">

          <div className = 'main-holder'>

            <div className='history-section'>
              <p className='histo'> Waka Waka's History</p>

              <p> &#9830; Waka Waka was founded in 2019 in Machakos. <br></br> &#9830; Orginal Founders were five. <br></br> &#9830; Since then our team has been expanding and we are looking forward to working with a whole global community. <br></br> &#9830; Waka Waka will grow with you. </p>

            </div>

            <div className="empower">

              <p className='future'> Empower your future </p>
              <p> &#9830; What Waka Waka means to us</p>
              <p> &#9830; We exist to unlock human potential at scale. <br></br> &#9830; We envision a world where all people can own homes and have a roof over their heads. <br></br> &#9830; Providing homes to you at a pocket friendly price and at your comfort.</p>
            </div>

          </div>

      </section>

      <section className='leaders'>

        <div className='leaders-head'>

          <p className='team'>Brilliant minds and companies come together to build the future</p>
          <p className='dedication'> Meet the team dedicated to helping the world’s best companies build the world’s best teams. </p>
         
        </div>

        <div className='managers'>

          <div className = 'man-wanjie'>
            <img src = {image} alt = 'CEO' className = 'wanjie'/>
            <p> &spades; The man with two left feet. <br></br> &spades; The CEO, Wanjie Ryan. <br></br> &spades; Founder of The Waka Waka Managers</p>
          </div>

          <div className = 'man-wanjie'>
            <img src = {image2} alt = 'CEO' className = 'wanjie'/>
            <p> &spades; The man with the chill sign. <br></br> &spades; The Manager, Mutuku Cornelius. <br></br> &spades; Founder of The Waka Waka Managers</p>
          </div>


          <div className = 'man-wanjie'>
            <img src = {image} alt = 'CEO' className = 'wanjie'/>
            <p> &spades; The man with the faint smile. <br></br> &spades; The Treasurer, Maina Kelvin. <br></br> &spades; Founder of The Waka Waka Managers</p>
          </div>


          <div className = 'man-wanjie'>
            <img src = {image} alt = 'CEO' className = 'wanjie'/>
            <p> &spades; The man with the Afro. <br></br> &spades; The Programmer, Waithaka Samuel. <br></br> &spades; Founder of The Waka Waka Managers</p>
          </div>

          <div className = 'man-wanjie'>
            <img src = {image} alt = 'CEO' className = 'wanjie'/>
            <p> &spades; The Noble man. <br></br> &spades; The Policy Maker, Cheryuiot Kipngetich. <br></br> &spades; Founder of The Waka Waka Managers</p>
          </div>

          <div className = 'man-wanjie'>
            <img src = {image} alt = 'CEO' className = 'wanjie'/>
            <p> &spades; The man with the Kamba Vibes. <br></br> &spades; The HR, Muema Wycliffe. <br></br> &spades; Founder of The Waka Waka Managers</p>
          </div>



        </div>


      </section>


      <section className="finding-wor">
        <p>
          Connecting You To an affordable <br></br>Lavish home of your choice.
        </p>

        <Link to = '/properties'><button className="btn-house">Find a house </button></Link>
        <Link to ='/contact'><button className="btn-work"> Find Work </button></Link>
      </section>


      <footer className="sign-of">
        <p className="tt">
          {" "}
          Bringing Like Minds Together, The Future is Here With Us.
        </p>

        <div className="off">
          <div className="inner-off">
            <p className="reach">Reach us on: </p>

            {/* when linking your component to an externl source eg. Youtube, use a href as below but when linking your components internally in react use link to tags */}

            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faYoutube} className="fa" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon icon={faGithub} className="fa" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="fa" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="fa" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
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


    
    
    
     </>



  )
}

export default About