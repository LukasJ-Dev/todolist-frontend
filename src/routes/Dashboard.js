import React from 'react';
import ProjectsList from '../components/Lists/ProjectsList';
import apiHandler from '../handler/apiHandler';
import NewProject from './NewProject';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      hasPopup: false,
      editProject: {}
    }
  }

  componentDidMount() {
    this.requestProjects();
  }

  requestProjects() {
    apiHandler.get('projects').then((data) => {
      
      this.setState({projects: data});
    });
  }

    openNewProjectPopup() {
      this.setState({hasPopup: true});
    }

    OpenEditProjectPopup(id) {
      
      for (let i = 0; i < this.state.projects.length; i++) {
        if(this.state.projects[i].id === id) {
          this.setState({hasPopup: true, editProject: this.state.projects[i]});
          return true;
        }
      }
      return false;
    }

    closeNewProjectPopup() {
      this.setState({hasPopup: false,editProject: {}});
      this.requestProjects();

    }

    render() {
      var popup = (<div></div>);
      
      if(this.state.hasPopup) {
        popup = (
          <div className="popup-container">
            <NewProject closeNewProjectPopup={this.closeNewProjectPopup.bind(this)} editProject={this.state.editProject}/>
          </div>
        )
      }
      return (
          <div className="container">
            
              <h1>Dashboard</h1>
              <button className="inv-button float-button" onClick={this.openNewProjectPopup.bind(this)}>New Project</button>
              <br/><hr/>
              <ProjectsList projects={this.state.projects} OpenEditProjectPopup={this.OpenEditProjectPopup.bind(this)}/>
              {popup}
          </div>
      );
    }
  }

export default Dashboard;
