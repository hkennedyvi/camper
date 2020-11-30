import React, { Component } from 'react';
import './navbar.scss';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isTop: true
        };
    };

    componentDidMount() {
        window.addEventListener("scroll", () => {
            let viewPosition = window.scrollY;
            viewPosition > 10 ? this.setState({ isTop: false }) : this.setState({ isTop: true });
        })
    }

    render() {
        return (
            <nav className={`navbar ${this.state.isTop ? "" : "active"}`} >
                <div>
                    <a href="/">
                        LOGO
                    </a>
                </div>
                <div className="nav_item">
                    <a href="/">
                        <hr className="above_line" />
                    HOME
                    </a>
                </div>
                <div className="nav_item">
                    <a href="/about">
                        <hr className="above_line" />
                    ABOUT
                    </a>
                </div>
                <div className="nav_item">
                    <a href="/store">
                        <hr className="above_line" />
                    SHOP
                    </a>
                </div>
                <div className="nav_item">
                    <a href="/faq">
                        <hr className="above_line" />
                    FAQ
                    </a>
                </div>
                <div>
                    <a href="/">
                        CART
                    </a>
                </div>
            </nav>
        )
    }
}

export default NavBar;