import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="footer_top">
                    TOPPPY
                </div>
                <div className="footer_bottom">
                    <div className="footer_box">
                        <div className="footer_icons">
                            <span>X</span>
                            <span>X</span>
                            <span>X</span>
                            <span>X</span>
                            <span>X</span>
                            <span>X</span>
                        </div>
                    </div>
                    <div className="footer_box">THING</div>
                    <div className="footer_box">THING</div>
                    <div className="footer_box">
                        <ul>
                            <li>
                                <a href="/">THING</a>
                            </li>
                            <li>
                                <a href="/">THING</a>
                            </li>
                            <li>
                                <a href="/">THING</a>
                            </li>
                            <li>
                                <a href="/">THING</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
}

export default Footer;