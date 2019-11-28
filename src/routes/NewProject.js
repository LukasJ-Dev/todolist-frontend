import React from 'react';
import apiHandler from '../handler/apiHandler';

class NewProject extends React.Component {

  constructor(props) {
    super(props);
    var title = '';
    var description = '';
    var isEditMode = false;
    var selected = 0;

    if('title' in this.props.editProject) {
      isEditMode = true;
      title = this.props.editProject.title;
      description = this.props.editProject.description;
      selected = this.props.editProject.belongs_to;
    }
    this.state = {
        isEditMode: isEditMode,
        teams: [],
        title: title,
        description: description,
        image: null,
        selected: selected
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    var teams = this.state.teams;
    var team = teams.find((team) => {  
      if(team.id == this.state.selected) {
        return team;
      }
    });
    
    if(this.state.isEditMode) {
      this.editProject(team);
    } else {
      this.createProject(team);
    }
    
}

createProject = (team) => {
    const project = new FormData();
    project.append('title', this.state.title);
    project.append('description', this.state.description);
    project.append('belongs_to', team.id);
    project.append('image', this.state.image);
    console.log(project);
    apiHandler.post('projects',project, true).then((r) => {
        this.props.closeNewProjectPopup();
    });
}


editProject = (team) => {
  let project = {
    title: this.state.title,
    description: this.state.description,
    belongs_to: team.id
  }

  const url = 'projects/' + this.props.editProject.id;
  
  apiHandler.put(url,project).then((r) => {
      console.log(r);
      
      this.props.closeNewProjectPopup();
  });
}

delete = () => {
  const url = 'projects/' + this.props.editProject.id;
  apiHandler.delete(url).then((r) => {
    this.props.closeNewProjectPopup();
  });
}

onChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
}

onChangeSelect = (e) => {
  this.setState({selected: e.target.value});
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
      var btn_text = this.state.isEditMode ? "Edit Project" : "Create Project";

      var delete_btn = this.state.isEditMode ? (
        <button className="float-button" style={{backgroundColor:"red"}} onClick={this.delete.bind(this)}>Delete</button>
      ) : (<div></div>);

      var teamSelector = this.state.teams.map((team) =>
        <option value={team.id} key={team.id}>{team.name}</option>
      );
      return (
          <div className="card popup">
            <h1 className="login-title">New Project</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div className="container">
                      <label htmlFor="title">Title</label><br />
                      <input id="title" className="input" type="text" name="title" onChange={this.onChange.bind(this)} value={this.state.title}/>
                  </div>
                  <div className="container">
                      <label htmlFor="description">Description</label><br />
                      <textarea id="description" className="input" type="text" name="description" onChange={this.onChange.bind(this)} value={this.state.description}></textarea>
                  </div>
                  <div className="container">
                  <label htmlFor="teamselector">Team</label><br />
                    <select name="teamselector" id="teamselector" className="input" value={this.state.selected} onChange={this.onChangeSelect.bind(this)}>
                      {teamSelector}
                      </select>
                  </div>
                  <div className="container">
                      <label htmlFor="image">Image</label><br />
                      <input id="image" type="file" name="image" className="input float-buttton" onChange={this.onChangeImage.bind(this)}/>
                  </div>
                  <hr />
                  <div className="card-button-group">
                    <button type="submit" className="float-button">{btn_text}</button>
                    <button className="float-button" style={{backgroundColor:"gray"}} onClick={this.props.closeNewProjectPopup.bind(this)}>Cancel</button>
                    {delete_btn}
                  </div>
                  
              </form>
          </div>
      );
    }
  }

export default NewProject;
