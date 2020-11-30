import React, { Component } from 'react';
import InformationCard from '../InformationCard';
import './information.scss';

class Information extends Component {

    render() {
        const questionInfo = [
            {
                question: "DO I NEED TO BE A MEMBER TO ORDER ONLINE?",
                answer: "yes of course"
            },
            {
                question: "DO I NEED TO RETURN IN 30 DAYS?",
                answer: "yes of course"
            },
            {
                question: "DO I NEED TO ORDER ONLINE?",
                answer: "yes of course"
            },
        ]

        return (
            <section className="information_container">
                <div className="information_flex">
                    {questionInfo.map((item, index) => {
                        return (
                            <InformationCard
                                key={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        )
                    })}
                </div>
            </section>
        );
    };
};

export default Information;