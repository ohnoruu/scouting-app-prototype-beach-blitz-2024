import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import './MatchStats.css';

export default function MatchStats() {
    const navigate = useNavigate();
    const location = useLocation();
    const { teamNumber, matchData } = location.state || {};

    const [robotProfileData, setRobotProfileData] = useState();

    useEffect(() => {
        if (teamNumber) {
            axios.get(`http://localhost:3000/getRobot/${teamNumber}`)
                .then((response) => {
                    setRobotProfileData(response.data);
                })
                .catch((error) => {
                    console.error("Error making GET Request (MatchStats, getRobot teamNumber): ", error);
                });
        }
    }, [teamNumber]);

    return (
        <>
            <div className="topPiece" />
            <div className="container">
                    <FaArrowLeft className="buttonPiece" onClick = {() => navigate(-1)}/>
                {matchData && robotProfileData &&
                    <>
                        <div className="teamMain">
                            <div className="teamNameNum">
                                <span className="header">{robotProfileData.profile.teamName}</span>
                                <span className="subHeader">{robotProfileData.profile.teamNumber}</span>
                            </div>
                            <img className="image" src={require('../../../assets/interface-icons/filler-image.png')} alt="Robot" />
                        </div>

                        <div className="teamDesc">
                            <p className="teamDescText">Match Number: {matchData.matchNumber}</p>
                            <p className="teamDescText">Match Type: {matchData.matchType}</p>
                            <p className="teamDescText">Teleop Amp Count: {matchData.teleOpAmp}</p>
                            <p className="teamDescText">Teleop Speaker Count: {matchData.teleOpSpeaker}</p>
                            <p className="teamDescText">Autonomous Amp Count: {matchData.autoAmp}</p>
                            <p className="teamDescText">Autonomous Speaker Count: {matchData.autoSpeaker}</p>
                            <p className="teamDescText">Climbed: {matchData.climbed.toString()}</p>
                            <p className="teamDescText">Coopertition: {matchData.coopertition.toString()}</p>
                            <p className="teamDescText">High Note: {matchData.highNote.toString()}</p>
                            <p className="teamDescText">Comments: {matchData.comment}</p>
                        </div>
                    </>
                }
            </div>
        </>
    );
}