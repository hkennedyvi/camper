import React, { Component } from 'react';
import kayakingBg from './images/kayaking.jpg';
import NavBar from '../components/NavBar';
import Shop from '../components/Shop';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

class StorePage extends Component {
    render() {
        const pageInfo = "STORE";

        const pageStyling = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            height: "100vh",
            minHeight: "50rem",
            background: `url(${kayakingBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
        }
        return (
            <div>
            <NavBar />
            <Hero pageInfo={pageInfo} pageStyling={pageStyling} />
            <Shop />
            <Footer />
            </div>
        )
    }
};

export default StorePage;