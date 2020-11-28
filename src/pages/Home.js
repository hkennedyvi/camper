import React, { Component } from 'react';
import campingBg from './images/camping.jpg';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        const pageInfo = "HOME";
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
            <Main />
            <Footer />
            </div>
        )
    }
};

export default Home;