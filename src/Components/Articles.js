import React from 'react'; 
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Articles = ({url, imgSrc, title, date}) => {
    
  // if there is no image, don't return the article
  if (imgSrc === null) {
    return (
      null  
    )
  } else {
      return (
        <a className="image-container" href={url} aria-label={`${title}, enter to read more.`} title="Read more" target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt={title}/>
          <h2>{title}</h2>
          <p><FontAwesomeIcon icon={faClock} aria-hidden="true"/>{date.slice(0, 10)}</p>
        </a>
    )
  }  
}

export default Articles
