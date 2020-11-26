import React, { Component } from 'react';
import './main.scss';
import HammockImage from './images/hammock.png';

class Main extends Component {
    render() {
        return (
            <section className="main">
                <div className="left_container">
                    <h1>wilderness worth wandering</h1>
                </div>
                <div className="right_container">
                    <div className="header_container">
                        <h3>hang your own way</h3>
                    </div>
                    <div className="image_container">
                        <img className="main_image" src={HammockImage} alt="" />
                        <p className="main_copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Main;