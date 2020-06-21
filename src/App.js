import React, { Component } from 'react';
import Header from './Components/Header'
import Articles from './Components/Articles';
import axios from 'axios';
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      results: 1,
      query: '',
      isLoading: false,
    }
  }

  apiCall = (value = 'general') => {
    axios({
      url: `https://newsapi.org/v2/everything?q=${value}&language=en&pageSize=100&apiKey=eb43cb932e264320adfd1b7942970622`,
      method: 'GET',
      responseType: 'JSON',
    }).then(response => {

      let results = response.data.totalResults;
      let articles = response.data.articles;

      const filterArticleTitles = articles.filter((article, index, array) => {
        return array.findIndex(secondIndex => (secondIndex.title === article.title)) === index
      });

      this.setState({
        articles: filterArticleTitles,
        results,
        query: '',
        isLoading: false,
      })

    })
  }


  onPageLoad = () => {
    this.apiCall();
  }

  handleSearch = value => {
    this.apiCall(value);
  }

  render() {
    const {articles, results} = this.state;
    return (
      <>
        <Header handleSearch={this.handleSearch}/>
        {this.onPageLoad()}
        <div className="wrapper">
          <main>
            {
              results > 0 ? articles.map((article, index) => {
                return (
                  <Articles
                    key={index}
                    imgSrc={article.urlToImage}
                    title={article.title}
                    date={article.publishedAt}
                    url={article.url}
                  />
                  )
                }) : <h3>That must not have been newsworthy, try again.</h3>
              }
          </main>
        </div>
      </>
    )
  }
}

export default App