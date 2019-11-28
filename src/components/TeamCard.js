import React from 'react';

class TeamCard extends React.Component {



    render() {
      return (
        <div className="card m-5" style={{width: '18rem'}}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.team.name}</h5>
            </div>
        </div>
      );
    }
  }

export default TeamCard;
