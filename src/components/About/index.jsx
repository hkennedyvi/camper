import React, { Component } from 'react';
import './about.scss';
import hammockImg from './images/hammock.png';

class Hero extends Component {
    render() {
        return (
            <section className="about_container">
                <div className="about_card">
                    <div className="image_container">
                        <h3 className="sm_header">hangin' free since '83</h3>
                        <img className="about_image" src={hammockImg} alt="" />
                    </div>
                    <div className="text_container">
                    <h1>ABOUT US</h1>
                    <hr />
                    <p className="about_copy">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                </p>
                </div>
                </div>
            </section>
        )
    }
}

export default Hero;