import React, { Component } from 'react';
import './navbar.scss';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div>LOGO</div>
                <div className="nav_item">
                    <hr className="above_line"/>
                    THING
                </div>
                <div className="nav_item">
                    <hr className="above_line"/>
                    THING
                </div>
                <div className="nav_item">
                    <hr className="above_line"/>
                    THING
                </div>
                <div className="nav_item">
                    <hr className="above_line"/>
                    THING
                </div>
                <div>CART</div>
            </nav>
        )
    }
}

export default NavBar;