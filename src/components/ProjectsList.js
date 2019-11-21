import React from 'react';
import ProjectCard from './ProjectCard';

class ProjectsList extends React.Component {



    render() {
      const projectCards = this.props.projects.map((project) =>
        <ProjectCard project={project} key={project.id}/>
      );
      return (
          <div className="project-grid">
            {projectCards}
          </div>
      );
    }
  }

export default ProjectsList;
