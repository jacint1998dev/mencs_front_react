import React from "react";
import PropTypes from 'prop-types'
export default function DoctorCard(props){
    DoctorCard.propTypes = {
        background: PropTypes.string.isRequired,
        title: PropTypes.string,
        location: PropTypes.string,
        time: PropTypes.string
    }

    return(
        <div className="doctor-contact">
                <div className="doctor-rectangle" style={{
            backgroundImage: `url(${props.background})`
        }}>
                </div>
            <div className="doctor-card-frame">
                <h3 className="doctor-card-title">{props.title}</h3>
                <div className="doctor-card-text">
                        <p className="doctor-location">{props.location}</p>
                        <p className="doctor-open-time">{props.time}</p>
                </div>
            </div>
        </div>
    )
}