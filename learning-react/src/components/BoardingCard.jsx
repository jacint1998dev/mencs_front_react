import React from "react";
import PropTypes from 'prop-types'
import petsImage from '../images/pets-3715733_1280.jpg'
import Tags from "./Tags";
export default function BoardingCard(props){

    BoardingCard.propTypes = {
        title: PropTypes.string,
        text: PropTypes.string
    }
    return(
        <>
        <div className="boarding-locations-frame">
            <img src={petsImage} alt="" className="boarding-pets-image"/>
            <div className="boarding-location-text-frame">
                <h3 className="boarding-text-title">{props.title}</h3>
                <div className="boarding-text-body">
                    <p className="boarding-text-content">{props.text}</p>
                </div>
            </div>
        </div>
        <div className="boarding-location-frame-desk">
            <div className="boarding-location-frame-inside">
                <div className="boarding-frame-content">
                    <img src={petsImage} alt='' className="boarding-frame-img"></img>
                    <div className="boarding-frame-content-text">
                        <div className="boarding-frame-content-text-inside">
                        <h2 className="boarding-frame-title">{props.title}</h2>
                        </div>
                        <p className="boarding-frame-text">{props.text}</p>
                    </div>
                </div>
                <div className="boarding-frame-bottom-buttons">
                    <Tags content='kutya'/>
                    <Tags content='kozmetika'/>
                    <Tags content='gondoskodás'/>
                    <Tags content='séta'/>
                </div>
            </div>
        </div>
        </>
    )
}