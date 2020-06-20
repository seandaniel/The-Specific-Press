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
    this.props.handleSearch(this.state.query);
    this.setState({
      query: ''
    })
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
              type="text" 
              placeholder="Search for some news..."
              value={this.state.query}
              onChange={this.handleChange} 
            />
            <label className="sr-only" htmlFor="search">
            Search News
            </label>
          </form>
          {/* <h2>{this.state.query}</h2> */}
        </div>
      </header>
    )
  }
}

export default Header
