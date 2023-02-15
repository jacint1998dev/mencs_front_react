import React, { useState } from "react";
import petsImage from "../images/pets-3715733_1280.jpg";
import Tags from "./Tags";
export default function BoardingCard() {
  const [boardings] = useState([
    {
      id: "1",
      title: "Állat panziók",
      text: "Sed ut perspiciatis unde omnis iste natus error...",
    },
    {
      id: "2",
      title: "Állat panziók",
      text: "Sed ut perspiciatis unde omnis iste natus error...",
    },
    {
      id: "3",
      title: "Állat panziók",
      text: "Sed ut perspiciatis unde omnis iste natus error...",
    },
    {
      id: "4",
      title: "Állat panziók",
      text: "Sed ut perspiciatis unde omnis iste natus error...",
    },
  ]);
 
  const halfBoarding = boardings.slice(0,2);

  return (
    <>
      {halfBoarding.map((boarding) => (
        <React.Fragment key={boarding.id}>
          <div className="boarding-locations-frame">
            <img src={petsImage} alt="" className="boarding-pets-image" />
            <div className="dp-flex flex-col boarding-location-text-frame">
              <h3 className="boarding-text-title">{boarding.title}</h3>
              <div className="dp-flex flex-col boarding-text-body">
                <p className="boarding-text-content">{boarding.text}</p>
              </div>
            </div>
          </div>
          <div className="dp-flex flex-col boarding-location-frame-desk">
            <div className="boarding-location-frame-inside">
              <div className="dp-flex flex-row boarding-frame-content">
                <img
                  src={petsImage}
                  alt=""
                  className="boarding-frame-img"
                ></img>
                <div className="dp-flex flex-col boarding-frame-content-text">
                  <div className="dp-flex flex-col boarding-frame-content-text-inside">
                    <h2 className="boarding-frame-title">{boarding.title}</h2>
                  </div>
                  <p className="boarding-frame-text">{boarding.text}</p>
                </div>
              </div>
              <div className="dp-flex flex-row boarding-frame-bottom-buttons">
                <Tags content="kutya" />
                <Tags content="kozmetika" />
                <Tags content="gondoskodás" />
                <Tags content="séta" />
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
