import React from 'react';
import {Link} from "react-router-dom";

import logo from '../talin.JPG';

class Navbar extends React.Component {
    render() {
        let profilePicture;
        if(!this.props.isLoggedin) {
            profilePicture = (
            <div>
                <Link className="text-white" to="/login">Login</Link>
                <Link className="text-white pl-4" to="/register">Register</Link>
            </div>
            )
        } else {
            profilePicture = (
            <div>
                <button className="btn" style={{backgroundColor: 'transparent'}}>
                    <img src={logo} height="42" width="42" className="rounded-circle" alt="Profile"/>
                </button>
            </div>
            );
        }
      return (
        <div>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <Link className="navbar-brand" to="/">LJ Todolist</Link>
                <div className="navbar-nav mr-auto mt-2 mt-lg-0"></div>
                <div className="my-2 my-lg-0">
                    {profilePicture}
                </div>
            </nav>
        </div>
      );
    }
  }

export default Navbar;
