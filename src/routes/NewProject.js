import React from 'react';
import apiHandler from '../handler/apiHandler';
import axios from 'axios';

class NewProject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        teams: [],
        title: '',
        description: '',
        image: null
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    var value = document.getElementById('teamselector').value;
    var teams = this.state.teams;
    var team = teams.find((team) => {
      if(team.name === value) {
        return team;
      }
    });
    const project = new FormData();
    project.append('title', this.state.title);
    project.append('description', this.state.description);
    project.append('belongs_to', team.id);
    project.append('image', this.state.image);
    
    apiHandler.post('projects',project, true).then((r) => {
        this.props.closeNewProjectPopup();
    });
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
}

onChangeImage = (e) => {
  this.setState({image: e.target.files[0]});
  console.log(e.target.files[0]);
  
}

componentDidMount() {
  apiHandler.get('teams').then((data) => {
    this.setState({teams: data});
  });
  
}

    render() {
      const teamSelector = this.state.teams.map((team) =>
        <option value={team.name} key={team.id}>{team.name}</option>
      );
      return (
          <div className="card popup">
            <h1 className="login-title">New Project</h1>
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
                  <label htmlFor="teamselector">Team</label><br />
                    <select name="teamselector" id="teamselector" className="input">{teamSelector}</select>
                  </div>
                  <div className="container">
                      <label htmlFor="image">Image</label><br />
                      <input id="image" type="file" name="image" className="input float-buttton" onChange={this.onChangeImage.bind(this)}/>
                  </div>
                  <hr />
                  <div className="card-button-group">
                    <button type="submit" className="float-button">Create Project</button>
                    <button className="float-button" style={{backgroundColor:"gray"}} onClick={this.props.closeNewProjectPopup.bind(this)}>Cancel</button>
                  </div>
                  
              </form>
          </div>
      );
    }
  }

export default NewProject;
