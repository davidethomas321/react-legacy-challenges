import React, { Component } from 'react';
import {Input, Button} from 'reactstrap';
 
class ToDoList extends Component {
  constructor() { 
    super()
    this.state = {
     list: [],
     addTask: ''
   }
  }

  addTaskFunction(oldTask, newTask) {
    this.setState({
      list: [...oldTask, {task:newTask,isDone:"No"}]
    })
  }

  completeTaskFunction(index){
    let updateTask = this.state.list
    updateTask[index].isDone = 'Yes'
    this.setState({
      list: updateTask
    })
  }
  
  render() {
    return (
      <div>
       <Input onChange={(e) => this.setState({addTask: e.target.value})} id='addToDoTask' placeholder='Add task to list' />
       <br/>
       <Button onClick={()=>this.addTaskFunction(this.state.list, this.state.addTask)} >Add Task</Button>
       <br/>
       <br/>
       <h1>To Do List:</h1>
       <table style={{width:'80%'}}>
            <thead>
                <tr><td style={{width:'70%'}}>Tasks</td><td style={{width:'20%'}}>Finished?</td><td></td></tr>
            </thead>
            <tbody>
                {this.state.list.map((task, num) => {return(<tr key={task.task}><td>{task.task}</td><td>{task.isDone}</td><td>
                  <Button onClick={()=>this.completeTaskFunction(num)}>Done</Button>
                  </td></tr>)})}
            </tbody>
       </table>
     </div>
    )
  }
}
 
export default ToDoList;