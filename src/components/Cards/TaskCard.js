import React from 'react';
import apiHandler from '../../handler/apiHandler';

class TodolistCard extends React.Component {

    render() {
      return (
        <div className="card task-card">
            {this.props.task.title}
        </div>
      );
    }
  }

export default TodolistCard;
