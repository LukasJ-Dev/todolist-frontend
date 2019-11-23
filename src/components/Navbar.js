import React from 'react';
import {Link} from "react-router-dom";
import ProfilePopup from './ProfilePopup';

import logo from '../talin.JPG';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profilepopup: false
        }
    }

    showProfilePopup() {
        this.setState({profilepopup: !this.state.profilepopup});
    }

    render() {
        let profilePicture;
        if(this.props.loading) {
            profilePicture = (
                <div></div>
            )
        } else {
            if(!this.props.isLoggedin) {
                profilePicture = (
                <div>
                    <Link className="text-white" to="/login">Login</Link>
                    <Link className="text-white" to="/register">Register</Link>
                </div>
                )
            } else {
                profilePicture = (
                <div>
                    <button className="inv-button" onClick={this.showProfilePopup.bind(this)}>
                        <img src={logo} height="42" width="42" className="profile-picture" alt="Profile"/>
                    </button>
                </div>
                );
            }
        }

        var profilepopup = (<div></div>);
        if(this.state.profilepopup) {
            profilepopup = <ProfilePopup />
        }

      return (
        <div>
            <nav className="navbar">
                <Link className="navbar-brand" to="/">LJ Todolist</Link>
                <div className="nav-right">
                    {profilePicture}
                    
                </div>
                {profilepopup}
            </nav>
            
        </div>
      );
    }
  }

export default Navbar;
