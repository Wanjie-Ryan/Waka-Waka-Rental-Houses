import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buildingRoute } from "../api/api";
import "./Singleproperty.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

function Singleproperty() {
  const [property, setProperty] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { id } = params;

  const getSingleBuilding = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${buildingRoute}/${id}`);
      setProperty(data.property);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleBuilding();
  }, []);
  return (
    <main>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="i-row">
          <div className="col-left">
            <img src={property.img} alt={property.apartmentName} />
          </div>
          <div className="col-right">
            <div className="property-features">
              <div className="features">
                <div className="feature">
                  <h1>Name</h1>
                  <div className="flex">
                    <h1 className="facility-name">{property.apartmentName}</h1>
                  </div>
                </div>
                <div className="feature">
                  <h1>Description</h1>
                  <div className="flex">
                    <h1 className="facility-name">{property.description}</h1>
                  </div>
                </div>
                {/* <div className="feature">
              
              <h1>Facilities</h1>
              <div className="multi-flex">
                
                <div className="flex">
                  
                  <h1 className="facility-value"></h1>
                </div>
              </div>
            </div> */}
                <div className="feature">
                  <h1>Location</h1>
                  <div className="flex">
                    <h1 className="facility-name"></h1>
                    <div className="facility-value"> </div>
                  </div>
                  <div className="flex">
                    <h1 className="facility-name">
                      Location: {property.location}
                    </h1>
                    <div className="facility-value"></div>
                  </div>
                </div>
                <div className="feature">
                  <h1>Cost</h1>
                  <div className="flex">
                    <h1 className="facility-name">Ksh: {property.price}</h1>
                    {/* <div className="facility-value">{property.price}</div> */}
                  </div>
                </div>
                <div className="feature-contact">
                  <a href={`tel:${property.telNum}`} className="btn">
                    Call Dealer to Book a house
                    <FontAwesomeIcon icon={faPhone} className="LD" />
                  </a>
                  <br></br>
                  

                            <ReactWhatsapp
                      number="+254-791-618-714"
                      className="whatsapp"
                      message="Hello, Inquiry of Waka Waka Services!"
                    >
                      {" "}
                      <p>Reach us on Whatsapp <FontAwesomeIcon icon={faWhatsapp} className="fw" /></p>
                      
                      {" "}
                    </ReactWhatsapp>
                  {/* <a href="mailto:ryanwanjiedistortion@gmail.com">
                    Click to Send an Email
                  </a> */}

                
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Singleproperty;
