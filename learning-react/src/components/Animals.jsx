import React from "react";
import BigAnimalCard from "./BigAnimalCard";
import Ellipse from "./Ellipse";
import MoreButton from "./MoreButton";
import SmallAnimalCard from "./SmallAnimalCard";
import Title from "./Title";

export default function Animals() {
  return (
    <>
      <div className="section animals-desk">
        <div className="dp-flex flex-col animal-frame">
          <div className="dp-flex flex-row animal-frame-row-1">
            <BigAnimalCard />
          </div>
        </div>
        <MoreButton className="animals" />
        <button className="dp-flex flex-row animal-search-button">
          <p className="search-button-text">Részletes keresés</p>
        </button>
        <div className="dp-flex flex-row dropdown-1">
          <p className="dropdown-text">Kor</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="dp-flex flex-row dropdown-2">
          <p className="dropdown-text">Állat</p>
          <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>

      <div className="section animals">
        <div className="dp-flex flex-row flex-dropdown"></div>
        <div className="animals-frame">
          <div className="animals-adopt">
            <Title title="Adoptáció" />
            <MoreButton className="" />
          </div>
          <Ellipse name="mobile-slider-1" />
          <div className="p-0 dp-flex flex-row small-animal-cards">
            <SmallAnimalCard text="Kutya" />
            <SmallAnimalCard text="Cica" />
            <SmallAnimalCard text="Nyúl" />
            <SmallAnimalCard text="Madár" />
          </div>
        </div>
        <div className="p-0 dp-flex flex-row big-animal-cards-1">
          <BigAnimalCard />
        </div>
      </div>
    </>
  );
}
