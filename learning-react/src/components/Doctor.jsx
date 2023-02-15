import React from "react";
import MoreButton from "./MoreButton";
import Title from "./Title";
import DoctorCard from "./DoctorCard";
import Ellipse from "./Ellipse";


export default function Doctor() {
  return (
    <>
      <div className="section doctor">
        <div className="dp-flex flex-row doctor-frame">
          <Title title="Állatorvosok" />
          <MoreButton className="doctor" />
          <DoctorCard/>
          <Ellipse name="mobile-slider-3" />
        </div>
      </div>
      <div className="section doctor-desk">
        <Title title="Állatorvosok" />
        <MoreButton className="doctor" />
        <div className="dp-flex flex-row doctor-frame">
          <div className="dp-flex flex-col doctor-inside-frame-1">
            <DoctorCard/> 
          </div>
          <div className="dp-flex flex-col doctor-inside-frame-2">
            <DoctorCard/>
          </div>
        </div>
      </div>
    </>
  );
}
