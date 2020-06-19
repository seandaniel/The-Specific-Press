import React, { Component } from 'react';
import Header from './Components/Header'
import Articles from './Components/Articles';
import axios from 'axios';
import './index.scss';

// User types out query and hits enter
// Header.js component grabs input’s state and props to App.js
// App.js takes state from Header.js, updates its state and puts it into the Axios call
// Map through data grabbing article information relating to that parameter
// Present on page through a stateless component Articles.js


class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    axios({
      url: 'http://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=eb43cb932e264320adfd1b7942970622',
      method: 'GET',
      responseType: 'JSON',
      params: {
        query: '',
      },
    }).then((response => {
      let articles = response.data.articles;

      this.setState({
        articles,
        isLoading: false,
      })

      console.log(articles);
    }))
  }

  render() {
    const {isLoading, articles} = this.state;
    return (
      <>
        <Header />
        <div className="wrapper">
          <main>
            {
              isLoading ? <p>Loading...</p> : articles.map((article, index) => {
                return (
                  <Articles
                    key={index}
                    title={article.title}
                    imgSrc={article.urlToImage}
                    description={article.description}
                    url={article.url}
                  />
                )
              })
            }
          </main>
        </div>
      </>
    )
  }
}

export default App