import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DropDown from "components/favourites/DropDown";

export class DropDownButton extends Component {
  state = {
    showDropDown: false
  };

  handleHover = () => {
    this.setState({ showDropDown: !this.state.showDropDown });
  };

  render() {
    const btnClass = !this.state.showDropDown && 'hidden'
    
    return (
      <Fragment>
        <div className={`favourite-dropdown-button__container ${btnClass}`}>
          <i
            className={`far fa-heart favourite-dropdown-button `}
            onMouseEnter={this.handleHover}
          />
        </div>
        <DropDown
          showDropDown={this.state.showDropDown}
          favourites={this.props.favourites}
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
