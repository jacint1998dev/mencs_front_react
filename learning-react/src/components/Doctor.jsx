import React from "react";
import MoreButton from "./MoreButton";
import Title from "./Title";
import DoctorCard from "./DoctorCard";
import Ellipse from "./Ellipse";
import veterinaryImage from '../images/veterinary-85925_1280.jpg'

export default function Doctor(){
    return (
        <div className="doctor"> 
        <div className="doctor-frame">
                <Title title='Állatorvosok'/>
                <MoreButton/>
            <DoctorCard background={veterinaryImage} 
                        title='Kiskedvenc állatorvos'
                        location='Székelyudvarhely '
                        time='Ma: 9:00 - 17:00'/>
            <Ellipse name='mobile-slider-3'/>
        </div>
        </div>
    )
}