import React from 'react';
import {Link} from "react-router-dom";
import apiHandler from '../handler/apiHandler';

class ProjectCard extends React.Component {



    render() {
      return (
        <div className="card m-5" style={{width: '18rem'}}>
            <img src={apiHandler.getImageUrl(this.props.project.image)} className="card-img-top" alt={this.props.project.title} />
            <div className="card-body">
                <h5 className="card-title">{this.props.project.title}</h5>
                <p className="card-text">{this.props.project.description}</p>
                <Link to="/" className="btn btn-primary">Open</Link>
            </div>
        </div>
      );
    }
  }

export default ProjectCard;
