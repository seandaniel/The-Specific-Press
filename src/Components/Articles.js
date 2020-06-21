import React from 'react'; 
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Articles = ({title, imgSrc, url}) => {
    
  // if there is no image, don't return the article
  if (imgSrc === null) {
    return (
      null  
    )
  } else {
      return (
      <form action={url}>
        <div className="image-container">
        <img src={imgSrc} alt={title}/>
        <h2>{title}</h2>
        <button aria-label={`${title}, enter to read more.`} title={url}><FontAwesomeIcon icon={faLink} /></button>
        </div>
      </form>
    )
  }
  
}

export default Articles
