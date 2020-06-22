import React from 'react';
import '../index.scss';

const Error = () => {
  return (
    <div className="error-container">
      <img src="assets/thumbdown.png" alt="A thumb pointed down" />
      <h3>That subject must not be newsworthy, try again.</h3>
    </div>
  )
}

export default Error
