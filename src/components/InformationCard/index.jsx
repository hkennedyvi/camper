import React, { Component } from 'react';
import './informationcard.scss';

class InformationCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggled: false
        };

        // This binding is necessary to make `this` work in the callback
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    };

    handleMenuToggle() {
        this.setState(state => ({
            isToggled: !state.isToggled
        }));
    };


    render() {

        return (
            <div key={this.props.key} className="faq_box">
                <h5 className="faq_header">{this.props.question}</h5>
                <button
                    onClick={this.handleMenuToggle}
                    className={`faq_button ${this.state.isToggled ? "active" : ""}`}>
                    <i className="far fa-caret-square-down"></i>
                </button>
                <hr className="faq_header_underline" />
                <div className={`faq_content ${this.state.isToggled ? "active" : ""}`} >
                    <i className=" placeholder fas fa-people-carry"></i>
                    <p className="faq_copy">{this.props.answer}</p>
                </div>
            </div>
        );

    };
};

export default InformationCard;