import React from 'react';
import ListCard from '../Cards/ListCard';
import apiHandler from '../../handler/apiHandler';

class Lists extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.title);
    var list = {
      title: this.state.title,
      todolist_id: this.props.todolist_id
    };
    apiHandler.post('lists',list, true).then((r) => {
      this.props.requestTodolist();
      
    });
    
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

    render() {
        var ListCards = (<div></div>);
        if(this.props.lists != null) {
            var ListCards = this.props.lists.map((list) =>
            <ListCard list={list} key={list.id} requestTodolist={this.props.requestTodolist.bind(this)}/> 
      );
      }
      var submitbtn = (<div></div>);
      if(this.state.title.length > 0) {
        submitbtn = (
          <button className="container float-button" style={{backgroundColor:"lightgreen"}}>Create List</button>
        );
      }
      return (
          <div className="list-columms">
            {ListCards}
            <div className="card" style={{width: '18rem'}}>
              <form onSubmit={this.onSubmit.bind(this)}>
              <meta name="csrf-token" content="{{ csrf_token() }}" />
              <h5 className="card-title">
                <input id="title" className="input" type="text" name="title" placeholder="new List" onChange={this.onChange.bind(this)}/>
              </h5>
              {submitbtn}
              </form>
            
        </div>
          </div>
      );
    }
  }

export default Lists;
