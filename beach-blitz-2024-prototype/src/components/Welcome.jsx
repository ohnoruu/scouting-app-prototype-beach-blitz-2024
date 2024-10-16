import robbie from '../assets/images/robbie-transparent.png';
import FIRSTlogo from '../assets/images/FIRST.png';
import floor from '../assets/images/floor.png';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Welcome.css';

export default function Launch({ navigation }) {
    const navigate = useNavigate();
    
    let navigateToMain = () => {
        navigate('/navigator');
    };

    return (
        <div className="container">
            <div className="topPiece" />

            <div className="mainContent">

                <div className="mainContentText">
                    <span className="heroText">Welcome!</span>
                    <span className="infoText">Record data about other teams, such as their drivebase, win/loss ratio, and more!</span>

                    <div className="continueButton" onClick={navigateToMain}>
                        Get Started
                    </div>
                </div>
            </div>

            <div className="mainContentImage">
                <img className="floor" alt="background" src={floor} />
                <img className="robbie" alt="Robbie" src={robbie} />

                <div className="credits">
                    <span className="creditsText">Robo Scouts was made for</span>
                    <img className="FIRSTlogo" alt="FIRST logo" src={FIRSTlogo} />
                </div>
            </div>
        </div>
    );
}