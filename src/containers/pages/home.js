import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Home extends Component {
  render() {
    return (
    <div class="home">
      <h1> 
        <span>Your Perfect Recipe Awaits</span>
        <span>Search Millions of Recipes!</span>
      </h1>
      {/* <SearchBar/> */}
    </div>
    );
  }
}

export default withRouter(Home);