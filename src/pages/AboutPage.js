import React, { Component } from 'react';
import campingBg from './images/camping.jpg';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';

class AboutPage extends Component {
    render() {
        const pageInfo = "ABOUT";
        const pageStyling = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            height: "100vh",
            minHeight: "50rem",
            background: `url(${campingBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }
        return (
            <div>
            <NavBar />
            <Hero pageInfo={pageInfo}  pageStyling={pageStyling} />
            <About />
            <Footer />
            </div>
        )
    }
};

export default AboutPage;