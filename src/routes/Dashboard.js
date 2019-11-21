import React from 'react';
import ProjectsList from '../components/ProjectsList';
import {Link} from "react-router-dom";
import apiHandler from '../handler/apiHandler';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    apiHandler.get('projects').then((data) => {
      
      this.setState({projects: data});
    }).catch((err) => {
      
    });
  }

    render() {
      return (
          <div className="container">
            
              <h1>Dashboard</h1>
              <Link to='/newproject'><button className="inv-button float-button">New Project</button></Link>
              <br/><hr/>
              <ProjectsList projects={this.state.projects}/>
          </div>
      );
    }
  }

export default Dashboard;
