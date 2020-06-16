import React from 'react';
import Form from './components/Form';
import TaskList from './components/TaskList';

import {v4 as uuid} from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasks:[],
      id:uuid(),
      curr:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange(e){
    this.setState({curr: e.target.value});
  }
  handleDelete(id){
    let donetasks = [];
    for(let i = 0;i<this.state.tasks.length;i++){
      if(id !== this.state.tasks[i].id){
        donetasks.push(this.state.tasks[i]);
      }
    }
    this.setState({tasks:donetasks});
  }
  submitTask(e){
    e.preventDefault();
    let newtask = {
      id: this.state.id,
      item:this.state.curr
    };
    let newtasks = [...this.state.tasks,newtask];
    this.setState({
      tasks:newtasks,
      curr:'',
      id:uuid()
    });
  }
  handleEdit(id, newval){
    let newtasks = [];
    for(let i = 0;i<this.state.tasks.length;i++){
      if(id === this.state.tasks[i].id){
        newtasks.push({
          id: id,
          item: newval
        })
      }
      else{
        newtasks.push(this.state.tasks[i]);
      }
    }
    this.setState({tasks:newtasks});
  }
  render(){
    return (
      <div>
        <Form 
        item={this.state.curr} 
        handleChange={this.handleChange}
        handleSubmit={this.submitTask}
       />
        <TaskList tasks={this.state.tasks} 
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default App;
