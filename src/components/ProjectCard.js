import React from 'react';
import {Link} from "react-router-dom";
import apiHandler from '../handler/apiHandler';

class ProjectCard extends React.Component {



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
                <Link to="/"><button className="float-button">Open</button></Link>
            </div>
        </div>
      );
    }
  }

export default ProjectCard;
