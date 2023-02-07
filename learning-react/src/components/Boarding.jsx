import React from "react";
import MoreButton from "./MoreButton";
import Title from "./Title";
import Ellipse from "./Ellipse";
import BoardingCard from "./BoardingCard";

export default function Boarding(){
    return(
        <>
        <div className="boarding-frame">
            <MoreButton/>
            <Title title='Állat panziók'/>
        </div>
            <BoardingCard title='Állat panziók' text='Sed ut perspiciatis unde omnis iste natus error...'/>
        <Ellipse name='mobile-slider4'/>
        </>
    )
}