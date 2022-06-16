import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <nav>
        <i className="fas fa-leaf"></i>
        <span className="habit-tracker">Habit tracker</span>
        <span className="habit-totalcount">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
