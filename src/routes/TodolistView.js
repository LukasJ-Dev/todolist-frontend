import React from 'react';
import apiHandler from '../handler/apiHandler';
import Todolists from '../components/Todolists';
import NewTodolist from '../components/NewTodolist';

class TodolistView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        todolist: {},
        lists: [],
    }
    this.requestTodolist();
  }

  requestTodolist() {
    apiHandler.get('todolists/'+this.props.params.id).then((data) => {
      
      this.setState({todolist: data});
    });
  }
    render() {
        return (
            <div className="todolist-bg" style={{backgroundImage: `url(${apiHandler.getImageUrl(this.state.todolist.image)})`}}>
                <div className="gray-overlay">
                    <h1 className="container">{this.state.todolist.title}</h1>
                    
                    </div>
            </div>
      );
    }
  }

export default TodolistView;
