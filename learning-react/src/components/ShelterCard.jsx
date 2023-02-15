import React, { useState } from "react";
import shelterImage from "../images/shelter.jpg";

export default function ShelterCards() {
  const [shelterCards] = useState([
    {
      id: "1",
      image: shelterImage,
      name: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.",
    },
    {
      id: "2",
      image: shelterImage,
      name: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.",
    },
    {
      id: "3",
      image: shelterImage,
      name: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.",
    },
  ]);

  return (
    <>
      {shelterCards.map((shelterCard) => (
        <React.Fragment key={shelterCard.id}>
          <div className="dp-flex flex-row shelter-card-box">
            <div className="dp-flex flex-col shelter-content">
              <img src={shelterCard.image} alt=""></img>
              <div className="dp-flex flex-col shelter-text-frame">
                <h2 className="shelter-name">{shelterCard.name}</h2>
                <p className="shelter-text">{shelterCard.text}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
