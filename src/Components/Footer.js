import React from 'react';
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <p>News articles courtesy of the <a className="api-link" href="https://newsapi.org/">News API</a></p>
        <a href="https://github.com/seandaniel/the-specific-press">
          <FontAwesomeIcon icon={faCode} aria-hidden="true" title="View source code via GitHub"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer
