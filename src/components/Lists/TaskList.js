import React from 'react';
import TaskCard from '../Cards/TaskCard';
import apiHandler from '../../handler/apiHandler';

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title: '',
        }
      }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
      }

      onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.title);
        var task = {
          title: this.state.title,
          list_id: this.props.list_id
        };
        apiHandler.post('tasks',task, true).then((r) => {
            console.log(r);
            
          this.props.requestTodolist();
          this.state.title = '';
          document.getElementById('title').value = '';
          
        });
        
      }

    render() {
        const taskCards = this.props.tasks.map((task) =>
        <TaskCard task={task} key={task.id}/>
      );

      var submitbtn = (<div></div>);
      if(this.state.title.length > 0) {
        submitbtn = (
          <button className="container float-button" style={{backgroundColor:"SpringGreen"}}>Add Task</button>
        );
      }
      
      return (
          <div>
            {taskCards}
            <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                <textarea id="title" ype="text" name="title" placeholder="Create new task..." className="card input task-card" rows="5" style={{height:'15px',resize:'vertical',maxHeight:'150px'}} onChange={this.onChange.bind(this)}></textarea>
                {submitbtn}
            </form>
          </div>
      );
    }
  }

export default TaskList;
