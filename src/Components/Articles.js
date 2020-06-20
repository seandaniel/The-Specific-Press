import React from 'react'; 
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Articles = ({title, imgSrc, publishedAt, url}) => {
  return (
    <form action={url}>
        <div className="image-container">
        <img src={imgSrc} alt={title}/>
        <h2>{title}</h2>
        {/* <p>{publishedAt}</p> */}
        <button aria-label={`${title}, enter to read more.`} title={url}><FontAwesomeIcon icon={faExternalLinkAlt} /></button>
        </div>
    </form>
    )
}

export default Articles
