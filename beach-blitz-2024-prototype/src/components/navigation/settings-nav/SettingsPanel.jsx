import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import IonIcon from '@reacticons/ionicons'
import './SettingsPanel.css';

export default function SettingsPanel() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="topPiece" />
                
                <div className="middlePiece">
                    <div className="titleContainer">
                            <FaArrowLeft onClick={() => navigate(-1)} className="iconButton"/>
                        <span className="title">Settings Panel</span>
                    </div>

                    <button className="button" onClick={() => navigate('/navigator/settings/delete-robot')}>
                        <span className="buttonText">Delete Robot Profile</span>
                    </button>
                </div>
            </div>
        </>
    );
}