import React from "react";
import PropTypes from 'prop-types'

export default function MoreButton(props){
    MoreButton.propTypes = {
        className : PropTypes.string
    }
    return (
        <button className={`button-more-${props.className}`}>
            <p className="button-more-text">
            Több
            </p>
            <i className="fa-solid fa-chevron-right button-more-icon"></i>
        </button>
    )
}