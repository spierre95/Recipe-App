import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "containers/pages/Home";
import Recipe from "containers/pages/Recipe";
import Header from "containers/layout/Header";
import DisplayRecipes from "containers/DisplayRecipes";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers/root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route title="Landing" exact path="/" component={Home} />
              <Route title="Header" component={Header} />
            </Switch>
            <Route
              title="Search"
              exact
              path="/search"
              component={DisplayRecipes}
            />
            <Route
              title="Favourites"
              exact
              path="/favourites"
              component={DisplayRecipes}
            />
            <Route title="Recipe" path="/recipe/:recipe" component={Recipe} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
