import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';
import './index.scss';

//Components
import Header from './Components/Header'
import LoadingAnimation from './Components/LoadingAnimation';
import Articles from './Components/Articles';
import NoResults from './Components/NoResults'
import Footer from './Components/Footer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      results: 1,
      status: '',
      query: '',
      isLoading: true,
      pageLoadCount: 1,
    }
  }

  apiCall = (value='Miscellaneous') => {
    axios({
      url: 'https://proxy.hackeryou.com',
      responseType: 'json',
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' });
      },
      params: {
        reqUrl: 'https://newsapi.org/v2/everything',
        params: {
          q: value,
          language: 'en',
          pageSize: 100,
          apiKey: `eb43cb932e264320adfd1b7942970622`,
        },
        proxyHeaders: {
          header_params: 'value',
        },
        xmlToJSON: false,
      },
    }).then((response) => {

      let status = response.status;
      console.log(status);
      let results = response.data.totalResults;
      let articles = response.data.articles;

      // filters out exact article titles that match eachother
      const filterArticleTitles = articles.filter((article, index, array) => {
        return array.findIndex(secondIndex => (secondIndex.title === article.title)) === index
      });

      this.setState({
        articles: filterArticleTitles,
        results,
        status,
        query: '',
        isLoading: false
      })
    })
    console.log('API Called');
  }

  onPageLoad = () => {
    console.log('Miscellaneous')
    this.apiCall();
    this.setState({
      pageLoadCount: 2,
    })
  }

  handleSearch = value => {
    this.setState({
      isLoading: true
    })
    console.log(value);
    if (this.state.isLoading === false) {
      this.apiCall(value);
    }
  }

  // run onPageLoad only once
  componentDidMount() {
    if (this.state.pageLoadCount === 1) {
      this.onPageLoad();
    } 
  }

  render() {
    const {isLoading, articles, results} = this.state;
    
    return (
      <> 
        <Header handleSearch={this.handleSearch}/>
        <div className="wrapper">
          <main>
            {
              isLoading ? <LoadingAnimation /> 
              // && this.state.status === 200
              : results > 0 ? articles.map((article, index) => {
                return (
                  <Articles
                    key={index}
                    url={article.url}
                    imgSrc={article.urlToImage}
                    title={article.title}
                    date={article.publishedAt}
                  />
                  )
                }) : <NoResults />
              }
          </main>
        </div>
        <Footer />
      </>
    )
  }
}

export default App
