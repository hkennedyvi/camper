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
                    <div className="footer_box">THING</div>
                    <div className="footer_box">THING</div>
                    <div className="footer_box">THING</div>
                    <div className="footer_box">THING</div>
                </div>

            </section>
        )
    }
}

export default Footer;