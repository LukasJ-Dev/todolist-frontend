import React from 'react';
import apiHandler from '../handler/apiHandler';

class NewTodolist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        description: '',
        image: null
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    const todolist = new FormData();
    todolist.append('title', this.state.title);
    todolist.append('description', this.state.description);
    todolist.append('project_id', this.props.project_id);
    todolist.append('image', this.state.image);
    
    apiHandler.post('todolists',todolist, true).then((r) => {
        this.props.closeNewTodlistPopup();
    });
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
}

onChangeImage = (e) => {
  this.setState({image: e.target.files[0]});
  console.log(e.target.files[0]);
  
}

    render() {
      return (
          <div className="card popup">
            <h1 className="login-title">New Todolist</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div className="container">
                      <label htmlFor="title">Title</label><br />
                      <input id="title" className="input" type="text" name="title" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div className="container">
                      <label htmlFor="description">Description</label><br />
                      <textarea id="description" className="input" type="text" name="description" onChange={this.onChange.bind(this)}></textarea>
                  </div>
                  <div className="container">
                      <label htmlFor="image">Image</label><br />
                      <input id="image" type="file" name="image" className="input float-buttton" onChange={this.onChangeImage.bind(this)}/>
                  </div>
                  <hr />
                  <div className="card-button-group">
                    <button type="submit" className="float-button">Create Todolist</button>
                    <button className="float-button" style={{backgroundColor:"gray"}} onClick={this.props.closeNewTodlistPopup.bind(this)}>Cancel</button>
                  </div>
                  
              </form>
          </div>
      );
    }
  }

export default NewTodolist;
