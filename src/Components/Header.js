import React, { Component } from 'react';
import '../index.scss';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userSearch = this.state.query;
    console.log(userSearch);
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    // const {handleSubmit, handleChange} = this.state;
    return (
      <header>
        <div className="wrapper">
          <h1>The Specific Press</h1>
          <form onSubmit={this.handleSubmit}>
            <input 
              onChange={this.handleChange} 
              type="text" 
              placeholder="Search"
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
