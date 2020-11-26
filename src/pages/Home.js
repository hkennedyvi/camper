import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Main from '../components/Main';

class Home extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <Hero />
            <Main />
            </div>
        )
    }
};

export default Home;