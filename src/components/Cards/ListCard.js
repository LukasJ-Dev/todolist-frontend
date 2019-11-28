import React from 'react';
import TaskList from '../Lists/TaskList';

class ListCard extends React.Component {



    render() {
      return (
        <div className="card list-card">
            <h5 className="card-title">{this.props.list.title}</h5>
            <div className="task-list">
                <TaskList tasks={this.props.list.tasks} list_id={this.props.list.id} requestTodolist={this.props.requestTodolist.bind(this)}/>
            </div>
        </div>
      );
    }
  }

export default ListCard;
