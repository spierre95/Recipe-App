import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from 'store'
import Home from 'containers/pages/Home';
import Recipe from 'containers/pages/Recipe';
import Search from 'containers/pages/Search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route title="Home" exact path="/" component={Home} />
            <Route title="Search" exact path="/search" component={Search} />
            <Route title="Recipe" path="/:recipe" component={Recipe} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
