import React, { Component } from 'react';
import './hero.scss';

class Hero extends Component {
    render() {
        return (
            <section style={this.props.pageStyling}>
                <h1 className="hero_header">
                    {this.props.pageInfo}
                </h1>
            </section>
        )
    }
}

export default Hero;