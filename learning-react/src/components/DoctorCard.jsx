import React, { useState } from "react";
import veterinaryImage from "../images/veterinary-85925_1280.jpg";

export default function DoctorCard() {
  const [doctorCards] = useState([
    {id:"1", background: veterinaryImage, title: "Kiskedvenc állatorvos" ,  location: "Székelyudvarhely ", time: "Ma: 9:00 - 17:00", text:"Sed ut perspiciatis unde omnis iste natus error sit volupt..."},
    {id:"2", background: veterinaryImage, title: "Kiskedvenc állatorvos" ,  location: "Székelyudvarhely ", time: "Ma: 9:00 - 19:00", text:"Sed ut perspiciatis unde omnis iste natus error sit volupt..."},
    {id:"3", background: veterinaryImage, title: "Kiskedvenc állatorvos" ,  location: "Székelyudvarhely ", time: "Ma: 9:00 - 20:00", text:"Sed ut perspiciatis unde omnis iste natus error sit volupt..."},
    {id:"4", background: veterinaryImage, title: "Kiskedvenc állatorvos" ,  location: "Székelyudvarhely ", time: "Ma: 9:00 - 18:00", text:"Sed ut perspiciatis unde omnis iste natus error sit volupt..."}
  ])

   const doctorCardsFirstHalf = doctorCards.slice(0,2);
  // const doctorCardsSecondHalf = doctorCards.slice(doctorCards.length/2,doctorCards.length)

  return (
    <>
      <div className="doctor-contact">
        <div
          className="doctor-rectangle"
          style={{
            backgroundImage: `url(${doctorCards.at(0).background})`,
          }}
        ></div>
        <div className="dp-flex flex-col doctor-card-frame">
          <h3 className="doctor-card-title">{doctorCards.at(0).title}</h3>
          <div className="dp-flex flex-col doctor-card-text">
            <p className="doctor-location">{doctorCards.at(0).location}</p>
            <p className="doctor-open-time">{doctorCards.at(0).time}</p>
          </div>
        </div>
      </div>
      {doctorCardsFirstHalf.map((doctorCard) => (
      <React.Fragment key={doctorCard.id}>
      <div className="dp-flex flex-col doctor-contact-desk">
        <div className="dp-flex flex-row doctor-card-content">
          <img
            src={veterinaryImage}
            alt=""
            className="doctor-card-contact-img"
          />
          <div className="dp-flex flex-col doctor-content-inside">
            <div className="dp-flex flex-col doctor-content-inside-2">
              <p className="doctor-content-inside-date">{doctorCard.time}</p>
              <div className="dp-flex flex-col doctor-content-inside-3">
                <h2 className="doctor-content-inside-title">{doctorCard.title}</h2>
                <p className="doctor-content-inside-text">{doctorCard.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
         ))}
    </>
  );
}
