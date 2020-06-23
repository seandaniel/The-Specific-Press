import React from 'react';
import '../index.scss';
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
    <footer>
      <div className="wrapper">
        <p>News articles courtesy of the <a className="api-link" href="https://newsapi.org/">News API</a></p>
        <a href="https://github.com/seandaniel/the-specific-press">
          <FontAwesomeIcon icon={faCoffee}/>
        </a>
      </div>
    </footer>
    )
}

export default Footer
