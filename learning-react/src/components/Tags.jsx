import React from "react";
import PropTypes from "prop-types";
export default function Tags(props) {
  Tags.propTypes = {
    content: PropTypes.string,
  };
  return (
    <>
      <div className="dp-flex flex-row tags">
        <p className="tags-text">{props.content}</p>
      </div>
    </>
  );
}
