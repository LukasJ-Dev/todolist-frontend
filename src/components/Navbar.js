import React from 'react';
import {Link} from "react-router-dom";

import logo from '../talin.JPG';

class Navbar extends React.Component {
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
                    <button className="inv-button">
                        <img src={logo} height="42" width="42" className="profile-picture" alt="Profile"/>
                    </button>
                </div>
                );
            }
        }

      return (
        <div>
            <nav className="navbar">
                <Link className="navbar-brand" to="/">LJ Todolist</Link>
                <div className="nav-right">
                    {profilePicture}
                </div>
            </nav>
        </div>
      );
    }
  }

export default Navbar;
