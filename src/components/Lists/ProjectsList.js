import React from 'react';
import ProjectCard from '../Cards/ProjectCard';

class ProjectsList extends React.Component {



    render() {
      const projectCards = this.props.projects.map((project) =>
        <ProjectCard project={project} key={project.id} OpenEditProjectPopup={this.props.OpenEditProjectPopup.bind(this)}/>
      );
      return (
          <div className="project-grid">
            {projectCards}
          </div>
      );
    }
  }

export default ProjectsList;
