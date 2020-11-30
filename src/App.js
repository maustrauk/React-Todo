import React from 'react';

import "./App.css";


import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

window.localStorage.setItem('todoData', JSON.stringify(todoData));



class App extends React.Component {

   constructor() {
    super();
    this.state = {todoData}
  }

  handleAdd = task => {
    this.setState({
      todoData: [...this.state.todoData, { task: task, id: Date.now(), completed:false }]
    });
  }

  handleToggle = (itemId)=> {

    this.setState({
      todoData: this.state.todoData.map(item => {
        if (itemId === item.id) {
          return({
            ...item,
            completed: !item.completed
          });
        } else {
          return(item);
        }
      })
    });
  }

  handleCompleted = () => {
    this.setState({
      todoData: this.state.todoData.filter(item=>(!item.completed))
    });
  }

  render() {
    return (
      <div className="App-container">
        <h2>All Tasks</h2>
        <TodoList todo={this.state.todoData} handleToggle={this.handleToggle} />
        <TodoForm  handleAdd={this.handleAdd} handleCompleted={this.handleCompleted}/>
      </div>
    );
  }
}

export default App;
