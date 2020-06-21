import React, { Component } from 'react';
import '../index.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      placeholder: 'Miscellaneous'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.query);
    this.setState({
      query: '',
      placeholder: this.state.query

    })
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    // const {handleSubmit, handleChange} = this.state;
    return (
      <header>
        <div className="wrapper">
          <h1>The Specific Press</h1>
          <h2>Enter a subject for the latest news headlines</h2>
          <form onSubmit={this.handleSubmit}>
            <h2>Showing results for: </h2>
            <input 
              type="text" 
              placeholder={this.state.placeholder}
              value={this.state.query}
              onChange={this.handleChange} 
            />
            <label className="sr-only" htmlFor="search">
            Search News
            </label>
          </form>
        </div>
      </header>
    )
  }
}

export default Header
