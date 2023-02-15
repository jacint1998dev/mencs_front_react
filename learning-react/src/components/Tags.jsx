import React, {useState} from "react";
import PropTypes from "prop-types";
export default function Tags(props) {
  Tags.propTypes = {
    content: PropTypes.string,
  };

  const [tags] = useState(props);
  return (
    <>
      <div className="dp-flex flex-row tags">
        <p className="tags-text">{tags.content}</p>
      </div>
    </>
  );
}
