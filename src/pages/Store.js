import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Shop from '../components/Shop';
import Footer from '../components/Footer';

class Store extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <Shop />
            <Footer />
            </div>
        )
    }
};

export default Store;