import React from "react";
import PropTypes from 'prop-types'
import petsImage from '../images/pets-3715733_1280.jpg'
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
        </>
    )
}