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
        this.props.history.push('/dashboard');
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
          <div className="container">
            <h1>New Project</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div>
                      <label htmlFor="title">Title</label>
                      <input id="title" type="text" name="title" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div>
                      <label htmlFor="description">Description</label>
                      <input id="description" type="text" name="description" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div>
                      <label htmlFor="image">Image</label>
                      <input id="image" type="file" name="image" onChange={this.onChangeImage.bind(this)}/>
                  </div>
                  <div>
                    <select name="team" id="teamselector">{teamSelector}</select>
                  </div>
                  <button type="submit">Create Project</button>
              </form>
          </div>
      );
    }
  }

export default NewProject;
