import React from "react";
import PropTypes from "prop-types";
import veterinaryImage from "../images/veterinary-85925_1280.jpg";

export default function DoctorCard(props) {
  DoctorCard.propTypes = {
    background: PropTypes.string.isRequired,
    title: PropTypes.string,
    location: PropTypes.string,
    time: PropTypes.string,
    text: PropTypes.string,
  };

  return (
    <>
      <div className="doctor-contact">
        <div
          className="doctor-rectangle"
          style={{
            backgroundImage: `url(${props.background})`,
          }}
        ></div>
        <div className="dp-flex flex-col doctor-card-frame">
          <h3 className="doctor-card-title">{props.title}</h3>
          <div className="dp-flex flex-col doctor-card-text">
            <p className="doctor-location">{props.location}</p>
            <p className="doctor-open-time">{props.time}</p>
          </div>
        </div>
      </div>
      <div className="dp-flex flex-col doctor-contact-desk">
        <div className="dp-flex flex-row doctor-card-content">
          <img
            src={veterinaryImage}
            alt=""
            className="doctor-card-contact-img"
          />
          <div className="dp-flex flex-col doctor-content-inside">
            <div className="dp-flex flex-col doctor-content-inside-2">
              <p className="doctor-content-inside-date">{props.time}</p>
              <div className="dp-flex flex-col doctor-content-inside-3">
                <h2 className="doctor-content-inside-title">{props.title}</h2>
                <p className="doctor-content-inside-text">{props.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
