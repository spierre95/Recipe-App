import React, { Component } from 'react';
import { withRouter } from 'react-router';
import SearchBar from 'components/SearchBar'

class Home extends Component {
  render() {
    return (
    <div className="home">
      <div className="home__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Your Perfect Recipe Awaits</span>
        </h1>
        <SearchBar redirect={true} className={"search__container--main"} />
      </div>
    </div>
    );
  }
}

export default withRouter(Home);