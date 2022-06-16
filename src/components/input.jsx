import React, { Component } from "react";

class Input extends Component {
  state = {
    newHabit: "",
  };
  handleAdd = (event) => {
    const add = document.querySelector(".add").value;
    this.setState({ newHabit: add });
    console.log(this.newHabit);
  };

  render() {
    return (
      <>
        <input className="add" />
        <button className="habit-button habit-add" onClick={this.handleAdd}>
          <i className="fas fa-plus"></i>
        </button>
      </>
    );
  }
}

export default Input;
