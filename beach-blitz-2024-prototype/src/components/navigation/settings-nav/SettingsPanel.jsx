import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { IonIcon } from '../../../index.js';
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
                            <img src="https://static.vecteezy.com/system/resources/previews/024/722/367/non_2x/fish-with-ai-generated-free-png.png" />
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