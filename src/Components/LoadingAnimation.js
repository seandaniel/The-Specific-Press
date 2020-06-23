import React from 'react';
import '../index.scss';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingAnimation = () => {
  return (
    <div className='loading-container'>
      <FontAwesomeIcon icon={faSpinner} />
      <p>Loading...</p>
    </div>
  )
}

export default LoadingAnimation
