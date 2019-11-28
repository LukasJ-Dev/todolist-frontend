import React from 'react';
import apiHandler from '../handler/apiHandler';
import {Link} from "react-router-dom";
import TeamList from '../components/Lists/TeamList';

class Teams extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          teams: []
        }
      }
    
      componentDidMount() {
        apiHandler.get('teams').then((data) => {
          this.setState({teams: data});
          console.log(data);
          
        }).catch((err) => {
          
        });
      }


    render() {
      return (
          <div className="container">
              <Link to='/newteam'>New Team</Link>
              <TeamList teams={this.state.teams}/>
          </div>
      );
    }
  }

export default Teams;
