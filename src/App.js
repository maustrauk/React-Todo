import React from 'react';


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

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

   // Constructor with state
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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todoData} handleToggle={this.handleToggle} />
        <TodoForm  handleAdd={this.handleAdd} handleCompleted={this.handleCompleted}/>
      </div>
    );
  }
}

export default App;
