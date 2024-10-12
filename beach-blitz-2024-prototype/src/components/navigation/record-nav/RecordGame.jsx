import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { IonIcon } from '../../../index.js';
import Counter from '../../record/Counter.jsx';
import CheckRecord from '../../record/CheckRecord.jsx';
import './RecordGame.css';

export default function RecordGame({ route }) {
    const navigate = useNavigate();
    const { robot } = route.params;
    const robotTeamNumber = robot.profile.teamNumber;

    const matchTypeSelection = [
        { label: 'Practice Match', value: 'Practice Match' },
        { label: 'Qualification Match', value: 'Qualification Match' },
        { label: 'Playoff Match', value: 'Playoff Match' },
        { label: 'Semifinals', value: 'Semifinals' },
    ];

    const [matchType, setMatchType] = useState(null);
    const [matchNumber, setMatchNumber] = useState(null);

    const [coopertition, setCoopertition] = useState(false);
    const [highNote, setHighNote] = useState(false);
    const [climbed, setClimbed] = useState(false);
    const [trap, setTrap] = useState(false);

    const [teleOpSpeaker, setTeleOpSpeaker] = useState(0);
    const [teleOpAmp, setTeleOpAmp] = useState(0);
    const [autoSpeaker, setAutoSpeaker] = useState(0);
    const [autoAmp, setAutoAmp] = useState(0);

    const [comment, setComment] = useState('');

    const submitMatch = async () => {
        const matchData = {
            matchType,
            matchNumber: Number(matchNumber),
            coopertition,
            highNote,
            climbed,
            teleOpSpeaker,
            teleOpAmp,
            autoSpeaker,
            autoAmp,
            comment,
        };

        try {
            await axios.post(`http://10.0.2.2:3000/addMatch/${robotTeamNumber}`, matchData);
        } catch (error) {
            console.error('Error making a POST request:', error);
        }

        navigate(-1);
    };

    return (
        <div className="container">
            <div className="topPiece" />
            <div className="middlePiece">
                <div className="header">
                    <img src="https://static.vecteezy.com/system/resources/previews/024/722/367/non_2x/fish-with-ai-generated-free-png.png"/>
                </div>
                <div className="scrollView">
                    <div className="row space-between">
                        <div className="column">
                            <span className="headerText">{robot.profile.teamName}</span>
                            <span className="subText">Team {robot.profile.teamNumber}</span>
                        </div>
                    </div>
                    <div className="row gap-10">
                        <select className="dropdown" value={matchType} onChange={e => setMatchType(e.target.value)}>
                            <option value="" disabled>Match Type</option>
                            {matchTypeSelection.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <input value={matchNumber} className="matchNumber" placeholder="Match Number" type="number" onChange={e => setMatchNumber(e.target.value)} />
                    </div>
                    <div className="checkboxes">
                        <CheckRecord checkboxTitle="Cooperition" stateValue={coopertition} changeState={setCoopertition} />
                        <CheckRecord checkboxTitle="High Note" stateValue={highNote} changeState={setHighNote} />
                        <CheckRecord checkboxTitle="Climbed" stateValue={climbed} changeState={setClimbed} />
                        <CheckRecord checkboxTitle="Trap" stateValue={trap} changeState={setTrap} />
                    </div>
                    <p className="marginTop30">Add +1 for each NOTE scored. Ex: robot puts 1 note in AMP</p>
                    <div className="marginTop30 gap-20">
                        <div>
                            <span className="headerText">Teleoperation</span>
                            <div className="row space-between">
                                <div className="pointContainer">
                                    <span>Speaker</span>
                                    <Counter target={teleOpSpeaker} setTarget={setTeleOpSpeaker} className="pointInput" />
                                </div>
                                <div className="pointContainer">
                                    <span>Amp</span>
                                    <Counter target={teleOpAmp} setTarget={setTeleOpAmp} className="pointInput" />
                                </div>
                            </div>
                        </div>
                        <span className="headerText">Autonomous</span>
                        <div className="row space-between">
                            <div className="pointContainer">
                                <span>Speaker</span>
                                <Counter target={autoSpeaker} setTarget={setAutoSpeaker} className="pointInput" />
                            </div>
                            <div className="pointContainer">
                                <span>Amp</span>
                                <Counter target={autoAmp} setTarget={setAutoAmp} className="pointInput" />
                            </div>
                        </div>
                    </div>
                    <div className="marginTop20">
                        <span className="headerText">Additional Comments</span>
                        <textarea value={comment} className="detailInput" onChange={e => setComment(e.target.value)} />
                    </div>
                    <button className="submitButton" onClick={submitMatch}>
                        <span className="submitButtonText">Submit</span>
                    </button>
                </div>
            </div>
        </div>
    );
}