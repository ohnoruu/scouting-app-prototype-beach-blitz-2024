import React, { useState, useEffect } from 'react';
import fillerImage from '../../assets/interface-icons/filler-image.png';
import './StatGlimpse.css';

export default function StatGlimpse({ name, teamNumber, drivebase, intake, isLoading }) {
  const [greyBoxWidth, setGreyBoxWidth] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setGreyBoxWidth(0);
    }
  }, [isLoading]);

  return (
    <div className="scoutingDataGlimpsePiece">
      <div className="metadata">
        {isLoading ? (
          <div className="greyBox" style={{ width: greyBoxWidth }} />
        ) : (
          <>
            <span className="headerSmaller">{name} ({teamNumber})</span>
            <div className="stats">
              <span className="text">Intake: {intake} </span>
              <span className="text"> | Drivebase: {drivebase}</span>
            </div>
          </>
        )}
      </div>
      <img className="fillerImage" alt="filler" src={fillerImage} />
    </div>
  );
}