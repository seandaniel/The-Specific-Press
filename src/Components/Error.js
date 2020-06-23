import React from 'react';
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.scss';

const Error = () => {
  return (
    <div className="error-container">
      <FontAwesomeIcon icon={faThumbsDown} />
      <h3>That subject must not be newsworthy, try again.</h3>
    </div>
  )
}

export default Error
