import React, { Component } from 'react';
import Header from './Components/Header'
import axios from 'axios';
import Articles from './Components/Articles';
// import Footer from './Components/Footer'
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      // null?
      results: 1,
      query: '',
      isLoading: true,
    }
  }

  apiCall = (value = 'Miscellaneous') => {
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
        placeholder: value,
        isLoading: false,
      })

      
    })
  }
  
  onPageLoad = () => {
    this.apiCall();
  }

  handleSearch = value => {
    this.apiCall(value);
    this.setState({
      placeholder: value,
    })
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
                })
                  : <div className="error-container">
                      <img src="assets/thumbdown.png" alt="A thumb pointed down"/>
                      <h3>That subject must not be newsworthy, try again.</h3>
                    </div>
              }
          </main>
        </div>
        {/* <Footer /> */}
      </>
    )
  }
}

export default App
