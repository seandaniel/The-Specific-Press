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
      query: '',
      isLoading: false
    }
  }

  handleSearch = value => {
    axios({
      url: `https://newsapi.org/v2/everything?q=${value}&language=en&pageSize=100&apiKey=eb43cb932e264320adfd1b7942970622`,
      method: 'GET',
      responseType: 'JSON',
     }).then(response => {
       let articles = response.data.articles;

       const filterArticleTitles = articles.filter((article, index, array) => {
         return array.findIndex(secondIndex => (secondIndex.title === article.title)) === index
       });
       
       this.setState({
         articles: filterArticleTitles,
         isLoading: false,
         query: ''
       })
     }
  )}

  render() {
    const {articles} = this.state;
    return (
      <>
        <Header handleSearch={this.handleSearch}/>
        <div className="wrapper">
          <main>
            {
              articles.map((article, index) => {
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
            }
          </main>
        </div>
      </>
    )
  }
}

export default App