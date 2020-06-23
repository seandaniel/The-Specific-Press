import React from 'react';
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoResults = () => {
  return (
    <div className="error-container">
      <FontAwesomeIcon icon={faThumbsDown} />
      <h3>That subject must not be newsworthy, try again.</h3>
    </div>
  )
}

export default NoResults
