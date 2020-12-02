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
                        <svg width="1798" height="1064" viewBox="0 0 1798 1064" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1466 948C934.708 877.936 635.764 841.983 98 792L512 232L928 116L1204 202L1700 782C1565.18 855.772 1487.08 897.65 1466 948Z" stroke="#005757" stroke-width="25" />
                            <path d="M955.55 634.022L946.339 709.039C939.773 762.515 891.413 800.761 837.863 794.829L394.949 745.761C339.678 739.637 300.058 689.541 306.835 634.346L316.509 555.558C337.995 380.567 496.243 255.415 671.476 274.828C849.668 294.569 977.399 456.077 955.55 634.022Z" stroke="#005757" stroke-width="25" />
                            <path d="M1432 864C1137.41 869.555 1020.18 883.185 886 924C907.257 633.94 898.03 445.279 1006 262C831.696 183.85 727.412 172.392 526 228C337.306 428.75 308.051 552.151 240 770C217.06 723.401 195.461 707.049 130 708C170.893 622.748 219.523 546.341 380 328C444.876 246.788 470 192.666 568 142C715 65.9998 805 53 930 57.9998C1046.32 68.0405 1148 109.666 1255 181C1330 231 1365.9 275.652 1422 346C1537.07 485.79 1596.39 567.997 1684 728L1681.55 728.882C1541.26 779.323 1461.85 807.875 1432 864Z" fill="#005757" />
                            <path d="M886 924C1020.18 883.185 1137.41 869.555 1432 864M886 924C907.257 633.94 898.03 445.279 1006 262C831.696 183.85 727.412 172.392 526 228C337.306 428.75 308.051 552.151 240 770M886 924V998M1432 864C1462.03 807.549 1542.19 778.992 1684 728M1432 864L1474 970M1684 728C1596.39 567.997 1537.07 485.79 1422 346C1365.9 275.652 1330 231 1255 181C1148 109.666 1046.32 68.0405 930 57.9998C805 53 715 65.9998 568 142C470 192.666 444.876 246.788 380 328C219.523 546.341 170.893 622.748 130 708M1684 728L1708 790M130 708C195.461 707.049 217.06 723.401 240 770M130 708L94 790M240 770L211 874" stroke="#005757" stroke-width="25" stroke-linecap="round" />
                        </svg>
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
                        <i className="nav_icon fas fa-shopping-cart"></i>
                    </a>
                </div>
            </nav>
        )
    }
}

export default NavBar;