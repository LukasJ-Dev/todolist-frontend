import React from 'react';
import {Link} from "react-router-dom";

class ProfilePopup extends React.Component {
    render() {
      const items = [
          {
              title: 'Dashboard',
              link: '/dashboard'
          },
          {
              title: 'Teams',
              link: '/teams'
          },
          {
            title: 'Settings',
            link: '/settings'
        }
      ]

      const ItemList = items.map((item) => (
          <li key={item.title} className="profile-item">
                <Link className="profile-link" to={item.link}>{item.title}</Link>
          </li>
      ));

      return (
            <div className="profilepopup">
            <div className="container">
                <br />
                        <h3>Lukas Johansson</h3>
                    </div>
                    <hr />
                    <ul className="profileList">
                    {ItemList}
                    </ul>
            </div>
      );
    }
  }

export default ProfilePopup;
