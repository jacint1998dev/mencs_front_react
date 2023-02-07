import React from "react";
import PropTypes from 'prop-types';

export default function ShelterCards(props){

    ShelterCards.propTypes = {
        image: PropTypes.string.isRequired,
        name: PropTypes.string,
        text: PropTypes.string
    }

    return(
        <div className="shelter-card-box">
            <div className="shelter-content">
            <img src={props.image} alt=''></img>
            <div className="shelter-text-frame">
                <h2 className="shelter-name">{props.name}</h2>
                <p className="shelter-text">{props.text}</p>
            </div>
            </div>
        </div>
    )
}