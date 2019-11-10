import React from 'react';
import ProjectCard from './ProjectCard';

class ProjectsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      const projectCards = this.props.projects.map((project) =>
        <ProjectCard project={project} key={project.id}/>
      );
      return (
          <div className="row">
            {projectCards}
          </div>
      );
    }
  }

export default ProjectsList;