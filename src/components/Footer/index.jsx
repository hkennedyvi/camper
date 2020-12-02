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
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                                <i className="fab fa-pinterest-square"></i>
                            </a>
                            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
                                <i class="fab fa-google-plus-square"></i>
                            </a>
                            <a href="https://www.mailchimp.com/" target="_blank" rel="noreferrer">
                                <i class="fab fa-mailchimp"></i>
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