import robbie from '../assets/images/robbie-transparent.png';
import logo from '../assets/images/logo.png';

import React, { useState, useEffect } from 'react';
import './Launch.css';

export default function Launch({ navigation }) {

    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);

        if (isLoading === false) {
            setTimeout(() => {
                navigation.navigate('Welcome');
            }, 2000);
        }
    }, [navigation, isLoading]);

    return (
        <div className="container">
            <div className="hero">
                <img className="launchImage" alt="Robbie" src={robbie} />
                <span className="header">ROBO SCOUTS</span>
            </div>

            <div className="credits">
                <span className="smallText">By Team 8521</span>

                <div className="creditsImageBackground">
                    <img className="creditsImage" alt="team logo 8521" src={logo} />
                </div>
            </div>
        </div>
    );
}