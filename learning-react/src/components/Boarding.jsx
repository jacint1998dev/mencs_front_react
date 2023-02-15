import React from "react";
import MoreButton from "./MoreButton";
import Title from "./Title";
import Ellipse from "./Ellipse";
import BoardingCard from "./BoardingCard";

export default function Boarding() {

  return (
    <>
      <div className="section boarding">
        <div className="boarding-frame">
          <MoreButton className="" />
          <Title title="Állat panziók" />
        </div>
        <BoardingCard/>
        <Ellipse name="mobile-slider4" />
      </div>
    
      <div className="section boarding-desk">
        <Title title="Állat panziók" />
        <div className="boarding-frame">
          <div className="dp-flex flex-col boarding-frame-inside-1">
            <BoardingCard/>
          </div>
          <div className="dp-flex flex-col boarding-frame-inside-2">
            <BoardingCard/>
          </div>
        </div>
        <MoreButton className="boarding" />
      </div>
    </>
  );
}
