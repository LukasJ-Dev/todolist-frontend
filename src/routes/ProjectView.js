import React from 'react';
import apiHandler from '../handler/apiHandler';
import Todolists from '../components/Todolists';
import NewTodolist from '../components/NewTodolist';

class ProjectView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        project: {},
        todolists: [],
        hasPopup: false
    }
    this.requestProject();
  }

  requestProject() {
    apiHandler.get('projects/'+this.props.params.id).then((data) => {
      
      this.setState({project: data.project, todolists: data.todolists});
    });
  }

  openNewTodolistPopup() {
    this.setState({hasPopup: true});
  }

  closeNewTodlistPopup() {
    this.setState({hasPopup: false});
    this.requestProject();

  }

    render() {
        console.log(this.state.todolists);
        
      var popup = (<div></div>);
      if(this.state.hasPopup) {
        popup = (
          <div className="popup-container">
            <NewTodolist closeNewTodlistPopup={this.closeNewTodlistPopup.bind(this)} project_id={this.state.project.id}/>
          </div>
        )
      }

        return (
            <div>
                <img src={apiHandler.getImageUrl(this.state.project.image)} className="project-img" alt={this.state.project.title} />
                <div className="container">
                    <h1>{this.state.project.title}</h1>
                    <p>{this.state.project.description}</p>
                    <hr />
                    <Todolists todolists={this.state.todolists} openNewTodolistPopup={this.openNewTodolistPopup.bind(this)}/>
                    {popup}
                </div>
            </div>
      );
    }
  }

export default ProjectView;
