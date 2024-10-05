import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Entypo } from '../../../index.js';
import './SettingsPanel.css';

export default function SettingsPanel() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="topPiece" />
                
                <div className="middlePiece">
                    <div className="titleContainer">
                        <button onClick={() => navigate('/password-prompt')} className="iconButton">
                            <Entypo name={'chevron-left'} size={30} color={'#616161'} />
                        </button>
                        <span className="title">Settings Panel</span>
                    </div>

                    <button className="button" onClick={() => navigate('/delete-robot')}>
                        <span className="buttonText">Delete Robot Profile</span>
                    </button>
                </div>
            </div>
        </>
    );
}