import React from 'react';

const Articles = ({title, imgSrc, description, url}) => {
  return (
    <article>
      <h1>{title}</h1>
      <img src={imgSrc} alt={title}/>
      <p>{description}</p>
      <a href={url}>Full Link</a>
    </article>
  )
}

export default Articles
