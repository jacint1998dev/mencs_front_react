import React, { useState } from "react";
import catImage from "../images/cat_image.jpg";
import catImage2 from "../images/cat2.jpg";
import dogImage from "../images/dog-5357794_1280.jpg";
import dogImage2 from "../images/dog2.jpg";
export default function BigAnimalCard() {
  const [bigAnimals] = useState([
    { 
      id: "1", 
      background: catImage, 
      name: "rex", 
      text: "keverék, 4 hónapos" },
    { 
      id: "2", 
      background: dogImage, 
      name: "Bloki", 
      text: "faj, 4 hónapos" },
    {
      id: "3",
      background: catImage2,
      name: "Retek",
      text: "keverék, 4 hónapos",
    },
    { 
      id: "4", 
      background: dogImage2, 
      name: "Gombóc", 
      text: "faj, 4 hónapos" },
    {
      id: "5",
      background: catImage,
      name: "Nyomi",
      text: "keverék, 4 hónapos",
    },
    { 
      id: "6", 
      background: dogImage, 
      name: "Szotyi", 
      text: "faj, 4 hónapos" },
    { 
      id: "7", 
      background: catImage2, 
      name: "rex", 
      text: "keverék, 4 hónapos" },
    { 
      id: "8", 
      background: dogImage2, 
      name: "Nyomi", 
      text: "faj, 4 hónapos" },
  ]);

  const bigAnimalsFirstFour = bigAnimals.slice(0, 4);

  return (
    <>
      {bigAnimals.map((animal) => (
        <React.Fragment key={animal.id}>
          <div
            className="big-animal-card"
            style={{
              backgroundImage: `url(${animal.background})`,
            }}
          >
            <i
              className={`fa-regular fa-heart animal-heart-icon-${animal.id}`}
            ></i>
            <div
              className={`dp-flex flex-row big-animal-card-textarea-${animal.id}`}
            >
              <div className="dp-flex flex-col big-animal-card-textarea-inside">
                <h2 className="big-animal-card-name">{animal.name}</h2>
                <div className="dp-flex flex-col big-animal-card-textarea-inside-2">
                  <p className="big-animal-card-textarea-inside-2-text">
                    {animal.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
      {bigAnimalsFirstFour.map((animal) => (
        <React.Fragment key={animal.id}>
          <div
            className="big-card-frame"
            style={{
              backgroundImage: `url(${animal.background})`,
            }}
          >
            <i
              className={`fa-regular fa-heart animal-heart-icon-${animal.id}`}
            ></i>
            <div
              className={`dp-flex flex-row big-card-name-frame-${animal.id}`}
            >
              <div className="dp-flex flex-col big-card-name-frame-inside-2">
                <h2 className="dp-flex big-card-name">{animal.name}</h2>
                <div className="dp-flex flex-col big-card-frame-inside-3">
                  <p className="big-card-text">{animal.text}</p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
