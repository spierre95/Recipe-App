import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DropDown from "components/favourites/DropDown";
import Counter from "components/Counter";

export class DropDownButton extends Component {
  state = {
    showDropDown: false
  };

  handleHover = () => {
    this.setState({ showDropDown: !this.state.showDropDown });
  };

  render() {
    const btnClass = !this.state.showDropDown && "hidden";

    const { favourites } = this.props;
    const amount = favourites.results.length

    return (
      <Fragment>
        <div className={`favourite-dropdown-button__container ${btnClass}`}>
          {amount > 0 && <Counter amount={amount} />}
          <i
            className={`far fa-heart favourite-dropdown-button `}
            onMouseEnter={this.handleHover}
          />
        </div>
        <DropDown
          showDropDown={this.state.showDropDown}
          favourites={favourites}
          handleHover={this.handleHover}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites
});

export default connect(mapStateToProps)(DropDownButton);
