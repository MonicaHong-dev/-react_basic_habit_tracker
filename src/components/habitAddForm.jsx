import React, { memo, PureComponent } from "react";
import Habits from "./habits";

// import React from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="addform" onSubmit={onSubmit}>
      <input type="text" className="add-input" placeholder="Habit" ref={inputRef} />
      <button className="add-submit">Add</button>
    </form>
  );
});
export default HabitAddForm;

// class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();
//   onSubmit = (event) => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // this.inputRef.current.value = "";
//     this.formRef.current.reset();
//   };
//   render() {
//     return (
//       <form ref={this.formRef} className="addform" onSubmit={this.onSubmit}>
//         <input type="text" className="add-input" placeholder="Habit" ref={this.inputRef} />
//         <button className="add-submit">Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;
