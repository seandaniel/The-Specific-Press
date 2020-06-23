import React from 'react';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingAnimation = () => {
  return (
    <div className='loading-container'>
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  )
}

export default LoadingAnimation
