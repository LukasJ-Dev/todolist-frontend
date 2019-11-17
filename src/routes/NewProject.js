import React from 'react';

class NewProject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        description: ''
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handler.apiHandler.post('projects',this.state, true).then((r) => {
        this.props.history.push('/dashboard');
    });
}

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
}

    render() {
      return (
          <div className="container">
            <h1>New Project</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div>
                      <label htmlFor="title">Title</label>
                      <input id="title" type="text" name="title" onChange={this.onChange.bind(this)}/>
                  </div>
                  <div>
                      <label htmlFor="description">Description</label>
                      <input id="description" type="text" name="description" onChange={this.onChange}/>
                  </div>
                  <button type="submit">Create Project</button>
              </form>
          </div>
      );
    }
  }

export default NewProject;
