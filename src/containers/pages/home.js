import React, { Component } from 'react';
import { withRouter } from 'react-router';
import SearchBar from 'components/SearchBar'

class Home extends Component {
  render() {
    return (
    <div className="home">
      <div className="home__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Your Perfect Recipe Awaits</span>
          <span class="heading-primary--sub">Search Millions of Recipes</span>
        </h1>
      </div>
      <SearchBar/>
    </div>
    );
  }
}

export default withRouter(Home);