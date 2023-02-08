import React from "react";
import MoreButton from "./MoreButton";
import Title from "./Title";
import Ellipse from "./Ellipse";
import BoardingCard from "./BoardingCard";

export default function Boarding(){
    return(
        <>
        <div className="boarding">
        <div className="boarding-frame">
            <MoreButton className=""/>
            <Title title='Állat panziók'/>
        </div>
            <BoardingCard 
             title='Állat panziók'
             text='Sed ut perspiciatis unde omnis iste natus error...'
             />
        <Ellipse name='mobile-slider4'/>
        </div>

        <div className="boarding-desk">
            <Title title='Állat panziók'/>
            <div className="boarding-frame">
                <div className="boarding-frame-inside-1">
                <BoardingCard 
                title='Lorem kutyapanzió' 
                text='Sed ut perspiciatis unde omnis iste natus error...'
                />
                <BoardingCard 
                title='Lorem kutyapanzió' 
                text='Sed ut perspiciatis unde omnis iste natus error...'
                />
                </div>
                <div className="boarding-frame-inside-2">
                <BoardingCard 
                title='Lorem kutyapanzió' 
                text='Sed ut perspiciatis unde omnis iste natus error...'
                />
                <BoardingCard 
                title='Lorem kutyapanzió' 
                text='Sed ut perspiciatis unde omnis iste natus error...'
                />
                </div>
            </div>
            <MoreButton className="boarding"/>
        </div>
        </>
    )
}