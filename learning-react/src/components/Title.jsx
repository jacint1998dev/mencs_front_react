import React from "react";
import PropTypes from 'prop-types';

export default function Title(props){
    Title.propTypes = {
        title: PropTypes.string
    }

    return(
        <>
        <h2 className="title">{props.title}</h2>
        </>
    )
}