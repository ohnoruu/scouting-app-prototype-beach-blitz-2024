import React from 'react';
//Buttons to subtract or add points
//import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import './Counter.css';

export default function Counter({ target, setTarget }) {
    return (
        <div className="counter-container">
            <img src = '' />
            <input
                type="text"
                value={target.toString()}
                className="counter-input"
                onChange={(e) => {
                    const parsedValue = parseInt(e.target.value);
                    if (!isNaN(parsedValue)) {
                        setTarget(parsedValue);
                    } else if (parsedValue === 0) {
                        setTarget(0);
                    }
                }}
            />
            <img src = '' />
        </div>
    );
}