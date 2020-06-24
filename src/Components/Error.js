import React from 'react';
import { faSurprise } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Error = () => {
  return (
    <div className="noResults-container">
      <FontAwesomeIcon icon={faSurprise}/>
      <h3>Whoa! We can't retrieve news articles right now. Read them from the <a href="https://news.google.com/topstories?hl=en-CA&gl=CA&ceid=CA:en">source</a> instead.</h3>
    </div>
  )
}

export default Error
