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
                        <svg className="logo" viewBox="0 0 1232 968" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M1040.28 910C642.251 839.936 418.292 803.983 15.418 754L325.573 194L637.226 78L843.995 164L1215.58 744C1114.58 817.772 1056.07 859.65 1040.28 910Z" stroke={this.state.isTop ? "white" : "#005757"} stroke-width="25" />
                                <path d="M663.38 515.941L649.082 671.371C644.19 724.558 597.911 760.976 545.132 753.171L264.587 711.684C209.552 703.546 168.653 651.454 173.755 595.994L188.281 438.075C200.324 307.152 314.241 217.51 444.158 236.721C576.984 256.363 675.693 382.087 663.38 515.941Z" stroke={this.state.isTop ? "white" : "#005757"} stroke-width="25" />
                                <path d="M1014.81 826C794.107 831.555 706.282 845.185 605.761 886C621.686 595.94 614.773 407.279 695.661 224C565.078 145.85 486.953 134.392 336.061 190C194.698 390.75 172.782 514.151 121.8 732C104.614 685.401 88.433 669.049 39.3918 670C70.0275 584.748 106.46 508.341 226.683 290C275.286 208.788 294.108 154.666 367.526 104C477.654 27.9998 545.079 15 638.724 19.9998C725.869 30.0405 802.043 71.6665 882.203 143C938.391 193 965.288 237.652 1007.31 308C1093.52 447.79 1137.96 529.997 1203.6 690L1201.76 690.882C1096.66 741.323 1037.17 769.875 1014.81 826Z" fill={this.state.isTop ? "white" : "#005757"} />
                                <path d="M605.761 886C706.282 845.185 794.107 831.555 1014.81 826M605.761 886C621.686 595.94 614.773 407.279 695.661 224C565.078 145.85 486.953 134.392 336.061 190C194.698 390.75 172.782 514.151 121.8 732M605.761 886V960M1014.81 826C1037.3 769.549 1097.35 740.992 1203.6 690M1014.81 826L1046.27 932M1203.6 690C1137.96 529.997 1093.52 447.79 1007.31 308C965.288 237.652 938.391 193 882.203 143C802.043 71.6665 725.869 30.0405 638.724 19.9998C545.079 15 477.654 27.9998 367.526 104C294.108 154.666 275.287 208.788 226.683 290C106.46 508.341 70.0275 584.748 39.3918 670M1203.6 690L1221.58 752M39.3918 670C88.433 669.049 104.614 685.401 121.8 732M39.3918 670L12.4219 752M121.8 732L100.074 836" stroke={this.state.isTop ? "white" : "#005757"} stroke-width="25" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="1232" height="968" fill="white" />
                                </clipPath>
                            </defs>
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