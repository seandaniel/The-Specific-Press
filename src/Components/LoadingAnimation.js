import React from 'react';
import '../index.scss';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

loading = () => {
  return (
    <div className='loading-container'>
      <p>Loading...</p>
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  )
}

export default Loading
