import React from 'react';
import ProjectsList from '../components/ProjectsList';
import apiHandler from '../handler/apiHandler';
import NewProject from './NewProject';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      hasPopup: false,
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

    closeNewProjectPopup() {
      this.setState({hasPopup: false});
      this.requestProjects();

    }

    render() {
      var popup = (<div></div>);
      if(this.state.hasPopup) {
        popup = (
          <div className="popup-container">
            <NewProject closeNewProjectPopup={this.closeNewProjectPopup.bind(this)} />
          </div>
        )
      }
      return (
          <div className="container">
            
              <h1>Dashboard</h1>
              <button className="inv-button float-button" onClick={this.openNewProjectPopup.bind(this)}>New Project</button>
              <br/><hr/>
              <ProjectsList projects={this.state.projects}/>
              {popup}
          </div>
      );
    }
  }

export default Dashboard;
