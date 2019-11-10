import React from 'react';
import {Link} from "react-router-dom";

class ProjectCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="card m-5" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
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
