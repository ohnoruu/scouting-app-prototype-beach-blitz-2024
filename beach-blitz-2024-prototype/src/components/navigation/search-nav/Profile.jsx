import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import './Profile.css';

export default function Profile() {
    const navigate = useNavigate();
    const { teamNumber } = useParams();
    const [robotProfileData, setRobotProfileData] = useState(null);

    useEffect(() => {
        console.log(`Fetching data for team number: ${teamNumber}`);
        if (teamNumber) {
            axios.get(`http://localhost:3000/getRobot/${teamNumber}`)
                .then((response) => {
                    console.log('Data fetched successfully:', response.data);
                    setRobotProfileData(response.data);
                })
                .catch((error) => {
                    console.error("Error making GET Request (Profile, getRobot teamNumber): ", error);
                });
        }
    }, [teamNumber]);

    useEffect(() => {
        console.log('robotProfileData:', robotProfileData);
    }, [robotProfileData]);

    return (
        <div className="container">
            <div className="topPiece" />
            <FaArrowLeft onClick={() => navigate(-1)} className="buttonPiece" />
            <div className="middlePieceContainer">
                <div className="middlePiece">

                {robotProfileData ? (
                    <>
                        <div className="teamMain">
                            <div className="teamSubMain">
                                <span className="header">{robotProfileData.profile?.teamName}</span>
                                <span className="subText">{robotProfileData.profile?.teamNumber}</span>
                            </div>

                            <img className="image" src={require('../../../assets/interface-icons/filler-image.png')} alt="Robot" />
                        </div>

                        <div className="robotDetails">
                            <span className="text">Drivebase: {robotProfileData.profile?.drivebase}</span>
                            <span className="text">Autonomous: {robotProfileData.profile?.autonomous?.toString()}</span>
                            <span className="text">Intake: {robotProfileData.profile?.intake}</span>
                            <span className="text">Additional Details: {robotProfileData.profile?.additionalDetails}</span>
                        </div>
                    </>
                ) : (
                    <span>Loading...</span>
                )}

                <div className="matchSection">
                    {robotProfileData?.matches?.map((match) => (
                        <div key={`${robotProfileData.profile?.teamName} match ${match.matchNumber}`}
                            onClick={() => navigate('/navigator/search/match-stats', { state: { teamNumber: robotProfileData.profile?.teamNumber, matchData: match } })}>

                            <div className="matches">
                                <span className="text"> Match Number: {match.matchNumber} </span>
                                <span className="text"> Match Type: {match.matchType} </span>
                            </div>

                        </div>
                    ))}
                </div>

                </div>
            </div>
        </div>
    );
}