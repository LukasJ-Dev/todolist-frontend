import React from 'react';
import TeamCard from '../TeamCard';

class TeamList extends React.Component {
    render() {
        console.log(this.props.teams);
        
        const teamList = this.props.teams.map((team) =>
            <TeamCard team={team} key={team.id}/>    
      );
      
      return (
          <div className="row">
            {teamList}
          </div>
      );
    }
  }

export default TeamList;
