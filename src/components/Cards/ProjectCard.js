import React from 'react';
import {Link} from "react-router-dom";
import apiHandler from '../../handler/apiHandler';

class ProjectCard extends React.Component {

  editProject = () => {
    this.props.OpenEditProjectPopup(this.props.project.id);
  }

    render() {
      return (
        <div className="card" style={{minwidth: '18rem'}}>
            <img src={apiHandler.getImageUrl(this.props.project.image)} className="card-img" alt={this.props.project.title} />
            <div className="card-body">
                <h5 className="card-title">{this.props.project.title}</h5>
                <p className="card-text">{this.props.project.description}</p>
            </div>
            <hr />
            <div className="card-button-group">
                <Link to={'/project/' + this.props.project.id}><button className="float-button">Open</button></Link>
                <button className="outline-button" style={{borderColor: 'orange'}} onClick={this.editProject.bind(this)}>Edit</button>
            </div>
        </div>
      );
    }
  }

export default ProjectCard;
