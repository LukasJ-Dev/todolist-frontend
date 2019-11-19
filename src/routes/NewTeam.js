import React from 'react';
import apiHandler from '../handler/apiHandler';

class NewTeam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        users: []
    };
  } // teams

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
    apiHandler.post('teams',this.state, true).then((r) => {
        console.log(r);
        this.props.history.push('/teams');
    });
}

onTitleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
}

onNewUser = (e) => {
    var users = this.state.users;
    users.push(e.target.value);
    e.target.value = "";
    this.setState({users: users});

}

onUserChange = (e) => {
    var beforechange = e.target.id.slice(5);
    var users = this.state.users;
    var i = users.indexOf(beforechange);
    console.log(i);
    
    if(e.target.value === '') {
        users.splice(i,1);
    } else {
        users[i] = e.target.value;
        console.log(users);
        
    }
    this.setState({users: users});
}
    render() {
        const usersInput = this.state.users.map((user) =>
        <li><input id={"team_"+ user} type="email" name="user" key={user} value={user} onChange={this.onUserChange.bind(this)} autoFocus/></li>
      );
        return (
          <div className="container">
            <h1>New Team</h1>
              <form onSubmit={this.onSubmit.bind(this)}>
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                  <div>
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" name="name" onChange={this.onTitleChange.bind(this)}/>
                  </div>
                  <div>
                    <ul>
                     {usersInput}
                     <input id="user" type="email" name="user" onBlur={this.onNewUser.bind(this)}/>
                    </ul>
                  </div>
                  <button type="submit">Create Team</button>
              </form>
          </div>
      );
    }
  }

export default NewTeam;
