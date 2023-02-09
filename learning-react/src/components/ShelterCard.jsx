import React from "react";
import PropTypes from "prop-types";

export default function ShelterCards(props) {
  ShelterCards.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    text: PropTypes.string,
  };

  return (
    <div className="dp-flex flex-row shelter-card-box">
      <div className="dp-flex flex-col shelter-content">
        <img src={props.image} alt=""></img>
        <div className="dp-flex flex-col shelter-text-frame">
          <h2 className="shelter-name">{props.name}</h2>
          <p className="shelter-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
