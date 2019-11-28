import React from 'react';
import apiHandler from '../handler/apiHandler';
import Lists from '../components/Lists/Lists';

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
      console.log(data);
      
      this.setState({todolist: data});
      
    });
  }
    render() {
      console.log(this.state.todolist);
      
      return (
            <div className="todolist-bg" style={{backgroundImage: `url(${apiHandler.getImageUrl(this.state.todolist.image)})`}}>
                <div className="gray-overlay">
                    <h2 className="container">{this.state.todolist.title}</h2>
                  </div>
                  <div>
                    <Lists lists={this.state.todolist.lists} todolist_id={this.state.todolist.id} requestTodolist={this.requestTodolist.bind(this)}/>
                  </div>
            </div>
      );
    }
  }

export default TodolistView;
