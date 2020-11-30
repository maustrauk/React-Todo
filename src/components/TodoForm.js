import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput:"" 
    }
  }

  handleChanges = e => {
    this.setState({
      textInput:e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.textInput);
    this.setState({
      textInput:""
    });
  }

  handleCompleted = e => {
    e.preventDefault();
    this.props.handleCompleted();
    console.log('Clear');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input value={this.state.textInput} onChange={this.handleChanges} type="text" name="item" />
        <button className="add-btn">Add Todo</button>
        <button onClick={this.handleCompleted} className="clear-btn">Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;