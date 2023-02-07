import React from "react";
import Ellipse from "./Ellipse";
import MoreButton from "./MoreButton";
import ShelterCards from "./ShelterCard";
import Title from "./Title";
import shelterImage from '../images/shelter.jpg'

export default function Shelter(){
    return(
        <div className="shelter">
            <div className="shelter-cards">
                <ShelterCards image={shelterImage} name='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.'/>
                <ShelterCards image={shelterImage} name='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.'/>
                <ShelterCards image={shelterImage} name='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... tovább.'/>
            </div>
            <div className="shelter-title">
                <Title title='Menhelyek'/>
                <MoreButton/>
            </div>
            <Ellipse name='mobile-slider-2'/>
        </div>
    )
}