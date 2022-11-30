import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./properties.css";
import axios from "axios";
import { buildingRoute } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";

// import {faCircleDollar} from ''

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProperties = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(buildingRoute);
      setProperties(data.properties);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProperties();
  }, []);
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>Waka Waka Managers </h1>
        </Link>
        {/* <p>View the latest house deals in the market </p> */}
      </nav>
      <div className="row properties-wrapper">
        {loading ? (
          <p>loading</p>
        ) : (
          properties.map((p) => (
            <div className="col" key={p._id}>
              <div className="property">
                <div className="property-img">
                  <img src={p.img} alt="" className="img" />
                </div>
                <div className="property-footer">
                  <div className="pname">
                    <h3 className="property-name">
                      Property name:
                      <Link to={`/properties/${p._id}`}>{p.apartmentName}</Link>
                    </h3>
                  </div>

                  <div className="loc">
                    <h2 className="location">
                      Location:{" "}
                      <FontAwesomeIcon icon={faLocationDot} className="LD" />{" "}
                      {p.location}
                    </h2>
                  </div>

                  <div className="price">
                    <p className="location">
                      Property Price:{" "}
                      <FontAwesomeIcon icon={faDollarSign} className="LD" />{" "}
                      {p.price}
                    </p>
                  </div>

                  <div className="viewdeal">
                    <Link to={`/properties/${p._id}`} className="view-btn">
                      View this Deal
                    </Link><br></br>

                    
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Properties;
