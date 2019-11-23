import React from 'react';
import TodolistCard from './TodolistCard';
import {Link} from "react-router-dom";

class Todolists extends React.Component {



    render() {
      const todolistCard = this.props.todolists.map((todolist) =>
        <TodolistCard todolist={todolist} key={todolist.id}/>
      );
      console.log(this.props);
      
      return (
          <div className="project-grid">
            {todolistCard}
            <div className="card" style={{minwidth: '18rem'}} onClick={this.props.openNewTodolistPopup.bind(this)}>
              Create a new Todolist
          </div>
          </div>
      );
    }
  }

export default Todolists;
