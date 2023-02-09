import React from "react";
import PropTypes from "prop-types";
export default function SmallAnimalCard(props) {
  SmallAnimalCard.propTypes = {
    text: PropTypes.string,
  };

  const beige_colors = ["#f2deb8", "#d1be9b", "#bfaa82"];

  function getRandomColor() {
    return beige_colors[Math.floor(Math.random() * beige_colors.length)];
  }
  return (
    <div className="small-card-frame">
      <div
        className="small-card-rectangle"
        style={{ backgroundColor: getRandomColor() }}
      ></div>
      <p className="small-card-text">{props.text}</p>
    </div>
  );
}
