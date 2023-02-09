import React from "react";
import PropTypes from "prop-types";
export default function Tags(props) {
  Tags.propTypes = {
    content: PropTypes.string,
  };
  return (
    <>
      <div className="tags">
        <p className="tags-text">{props.content}</p>
      </div>
    </>
  );
}
