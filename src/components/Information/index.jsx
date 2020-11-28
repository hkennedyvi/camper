import React, { Component } from 'react';
import './information.scss';

class Information extends Component {
    render() {
        return (
            <section className="information_container">
                <div className="information_flex">
                    <div className="faq_box">
                        <h3 className="faq_header">DO I NEED TO BE A MEMBER TO ORDER ONLINE?</h3>
                        <hr className="faq_header_underline" />
                        <p className="faq_copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="faq_box">QUESTION</div>
                    <div className="faq_box">QUESTION</div>
                </div>
            </section>
        )
    }
}

export default Information;