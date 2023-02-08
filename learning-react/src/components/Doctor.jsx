import React from "react";
import MoreButton from "./MoreButton";
import Title from "./Title";
import DoctorCard from "./DoctorCard";
import Ellipse from "./Ellipse";
import veterinaryImage from '../images/veterinary-85925_1280.jpg'

export default function Doctor(){
    return (
        <>
        <div className="doctor"> 
        <div className="doctor-frame">
                <Title title='Állatorvosok'/>
                <MoreButton className="doctor"/>
            <DoctorCard background={veterinaryImage} 
                        title='Kiskedvenc állatorvos'
                        location='Székelyudvarhely '
                        time='Ma: 9:00 - 17:00'/>
            <Ellipse name='mobile-slider-3'/>
        </div>
        </div>
        <div className="doctor-desk">
            <Title title="Állatorvosok"/>
            <MoreButton className='doctor'/>
            <div className="doctor-frame">
                <div className="doctor-inside-frame-1">
                <DoctorCard background={veterinaryImage} 
                        title='Kiskedvenc állatorvos'
                        location='Székelyudvarhely '
                        time='Ma: 9:00 - 17:00'
                        text='Sed ut perspiciatis unde omnis iste natus error sit volupt...'/>
                <DoctorCard background={veterinaryImage} 
                        title='Kiskedvenc állatorvos'
                        location='Székelyudvarhely '
                        time='Ma: 9:00 - 17:00'
                        text='Sed ut perspiciatis unde omnis iste natus error sit volupt...'/>
                </div>
                <div className="doctor-inside-frame-2">
                <DoctorCard background={veterinaryImage} 
                        title='Kiskedvenc állatorvos'
                        location='Székelyudvarhely '
                        time='Ma: 9:00 - 17:00'
                        text='Sed ut perspiciatis unde omnis iste natus error sit volupt...'/>
                <DoctorCard background={veterinaryImage} 
                        title='Kiskedvenc állatorvos'
                        location='Székelyudvarhely '
                        time='Ma: 9:00 - 17:00'
                        text='Sed ut perspiciatis unde omnis iste natus error sit volupt...'/>
                </div>
            </div>
        </div>
        
        </>
    )
}