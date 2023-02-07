import React from "react";
import PropTypes from 'prop-types';

export default function Ellipse(props){

	Ellipse.propTypes = {
		name: PropTypes.string
	}

		return(
				<div className={props.name}>
						<div className="ellipse-1"></div>
						<div className="ellipse-2"></div>
						<div className="ellipse-3"></div>
						<div className="ellipse-4"></div>
						<div className="ellipse-5"></div>
						<div className="ellipse-6"></div>
				</div>
		)

}