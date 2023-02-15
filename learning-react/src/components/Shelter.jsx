import React from "react";
import Ellipse from "./Ellipse";
import MoreButton from "./MoreButton";
import ShelterCards from "./ShelterCard";
import Title from "./Title";


export default function Shelter() {
  return (
    <>
      <div className="section shelter">
        <div className="dp-flex flex-row shelter-cards">
          <ShelterCards/>
        </div>
        <div className="shelter-title">
          <Title title="Menhelyek" />
          <MoreButton className="shelter" />
        </div>
        <Ellipse name="mobile-slider-2" />
      </div>
    </>
  );
}
