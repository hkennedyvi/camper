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
                <div>LOGO</div>
                <div className="nav_item">
                    <hr className="above_line" />
                    THING
                </div>
                <div className="nav_item">
                    <hr className="above_line" />
                    THING
                </div>
                <div className="nav_item">
                    <hr className="above_line" />
                    THING
                </div>
                <div className="nav_item">
                    <hr className="above_line" />
                    THING
                </div>
                <div>CART</div>
            </nav>
        )
    }
}

export default NavBar;