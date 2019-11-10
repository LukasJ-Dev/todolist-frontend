import React from 'react';
import ProjectsList from '../components/ProjectsList';
import axios from 'axios';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
    this.requestProjects();
  }

  requestProjects() {
    let promise = axios.get('http://laravel.local:85/ljtodolist-backend/public/api/projects', { 'headers': 
      { 'Authorization': 'Bearer '+localStorage.getItem('token'), 'Accept': 'application/json' } })
      .then(response => {
        return response.data;
      }).catch((err) => {
        return err;
      });

      promise.then((data) => {
        this.setState({projects: data});
      });
  }

    render() {
      return (
          <div className="container">
              <h1>Dashboard</h1>
              <ProjectsList projects={this.state.projects}/>
          </div>
      );
    }
  }

export default Dashboard;
