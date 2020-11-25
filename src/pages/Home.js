import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main';

class Home extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <Main />
            </div>
        )
    }
};

export default Home;