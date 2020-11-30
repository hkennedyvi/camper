import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="footer_top">
                </div>
                <div className="footer_bottom">
                    <div className="footer_box">
                        <div className="footer_icons">
                            <a href="/">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="lg_footer_box">
                        <h5>Our Mission</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="lg_footer_box">
                        <h5>Join Our Team</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="footer_box">
                        <ul className="footer_nav">
                            <li className="footer_nav_item">
                                <a href="/">HOME</a>
                            </li>
                            <li className="footer_nav_item">
                                <a href="/about">ABOUT</a>
                            </li>
                            <li className="footer_nav_item">
                                <a href="/store">SHOP</a>
                            </li>
                            <li className="footer_nav_item">
                                <a href="/faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
}

export default Footer;