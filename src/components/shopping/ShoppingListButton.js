import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ShoppingList from "./ShoppingList";
import Modal from "../Modal";
import Counter from "../Counter";

export class ShoppingListButton extends Component {
  state = {
    modalIsOpen: false,
  };

  handleClick = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    // const btnClass = !this.state.showDropDown && "hidden";

    const { shoppingList } = this.props;
    let listLength = 0; 
    for(let el in shoppingList) {
     listLength += shoppingList[el].ingredients.length
    }

    return (
      <Fragment>
        <div
          className={`favourite-dropdown-button__container`}
          style={{ right: "5rem" }}
        >
          {listLength > 0 && <Counter amount={listLength} />}
          <i
            className={`far fa-list-alt favourite-dropdown-button `}
            onClick={this.handleClick}
          />
        </div>
        <Modal modalIsOpen={this.state.modalIsOpen}>
          <ShoppingList />
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shoppingList: state.shopping.list
});

export default connect(mapStateToProps)(ShoppingListButton);
