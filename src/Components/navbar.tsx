import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import BueLogo from '../Assets/BueLogo-removebg.png';

class Navbar extends React.Component {
    render() {
        return (
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light  custom-navbar ">
                <a className="navbar-brand" href="/">
                    <div className="logo-container">
                    <img src={BueLogo} alt="BUE Logo" id ="BueLogo" width="30" height="30" className="d-inline-block align-top" />
                        <span className="brand-text font-weight-bold ">The British University in Egypt</span>
                    </div>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end ButtonArea" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">

                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                            <li className="nav-item">

                            <Link className="nav-link" to="/UserPage" >Users</Link>
                        </li>
                        <li className="nav-item custom-color">
                            <Link className="nav-link" to="/RegistrationPage">Registration</Link>
                        </li>
                
                    </ul>
                </div>
                </nav>
                
              
        );
    }
}

export default Navbar;
