import React from 'react'; 

const Articles = ({url, imgSrc, title, date}) => {
    
  // if there is no image, don't return the article
  if (imgSrc === null) {
    return (
      null  
    )
  } else {
      return (
        <a className="image-container" href={url} aria-label={`${title}, type enter to read more.`} title="Read More" target="_blank" rel="noopener noreferrer">
          <img src={imgSrc} alt={title}/>
          <h2>{title}</h2>
          <p>{date.slice(0, 10)}</p>
        </a>
    )
  }
  
}

export default Articles
