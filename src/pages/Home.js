import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <Hero />
            <Main />
            <Footer />
            </div>
        )
    }
};

export default Home;