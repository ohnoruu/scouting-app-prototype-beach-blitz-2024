import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordPrompt.css';

export default function PasswordPrompt() {
    const navigate = useNavigate();
    const [passValue, setPassValue] = useState('');

    const submitPassword = () => {
        // will hide password in the backend later
        if (passValue === 'cyberlions8521') {
            navigate('/settings-panel');
        }
    };

    return (
        <>
            <div className="topPiece" />

            <div className="container">
                <span className="title">Settings Panel</span>

                <span className="header">Admin Access Only</span>

                <div className="inputs">
                    <input
                        className="inputText inputBox"
                        placeholder="Password"
                        onChange={(e) => setPassValue(e.target.value)}
                        value={passValue}
                        type="password"
                    />

                    <button className="submitButton" onClick={submitPassword}>
                        <span className="submitText">Submit</span>
                    </button>
                </div>
            </div>
        </>
    );
}