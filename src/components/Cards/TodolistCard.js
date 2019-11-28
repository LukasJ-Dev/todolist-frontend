import React from 'react';
import apiHandler from '../../handler/apiHandler';

class TodolistCard extends React.Component {

    render() {
      return (
        <div className="card todolist-card" style={{minwidth: '18rem'}, {backgroundImage: `url(${apiHandler.getImageUrl(this.props.todolist.image)})`}}>
          <div className="gray-overlay">
            <div className="card-body">
                <h5 className="card-title">{this.props.todolist.title}</h5>
                <p className="card-text">{this.props.todolist.description}</p>
            </div>
          </div>
            
        </div>
      );
    }
  }

export default TodolistCard;
