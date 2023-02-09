import React from "react";
import PropTypes from "prop-types";
export default function BigAnimalCard(props) {
  BigAnimalCard.propTypes = {
    background: PropTypes.string.isRequired,
    name: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number,
  };

  return (
    <>
      <div
        className="big-animal-card"
        style={{
          backgroundImage: `url(${props.background})`,
        }}
      >
        <i className="fa-regular fa-heart animal-heart-icon"></i>
        <div className={`dp-flex flex-row big-animal-card-textarea-${props.id}`}>
          <div className="dp-flex flex-col big-animal-card-textarea-inside">
            <h2 className="big-animal-card-name">{props.name}</h2>
            <div className="dp-flex flex-col big-animal-card-textarea-inside-2">
              <p className="big-animal-card-textarea-inside-2-text">
                {props.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="big-card-frame"
        style={{
          backgroundImage: `url(${props.background})`,
        }}
      >
        <i className="fa-regular fa-heart animal-heart-icon"></i>
        <div className={`dp-flex flex-row big-card-name-frame-${props.id}`}>
          <div className="dp-flex flex-col big-card-name-frame-2">
            <h2 className="dp-flex big-card-name">{props.name}</h2>
            <div className="dp-flex flex-col big-card-frame-3">
              <p className="big-card-text">{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
