import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatGlimpse from '../home/StatGlimpse';
import informationIcon from '../../assets/interface-icons/info.png';
import axios from 'axios';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [robotList, alterRobotList] = useState();
  const [closeInfo, setCloseInfo] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/robotList') 
      .then((response) => {
        alterRobotList(response.data);
      })
      .catch((error) => {
        console.error("Error making POST Request: Home, robotList: ", error);
      });
  }, []);

  const manageCloseInfo = () => {
    setCloseInfo(true);
  };

  return (
    <>
      <div className="container">
        <div className="topPiece" />

        <div className="middlePiece">
          {!closeInfo && (
            <div className="getStarted">
              <span className="header">Get Started Scouting</span>

              <div className="important">
                <div className="importantHero">
                  <img className="importantIconImage" alt="important icon" src={informationIcon} />
                  <span className="headerSmaller">Important</span>
                </div>

                <span className="importantText">Scouting is the process of recording data for strategy, so take note!</span>

                <button onClick={manageCloseInfo} className="hyperlinkButton">
                  <span className="hyperlink">Let's Get Going!</span>
                </button>
              </div>
            </div>
          )}

          <div className="viewScoutingData">
            <span className="header">View Scouting Data</span>
            <div className="scoutingDataGlimpses">
              {robotList?.map((robot) => (
                <button key={robot.profile.teamNumber} className="statGlimpseButton">
                  <StatGlimpse name={robot.profile.teamName} teamNumber={robot.profile.teamNumber} driveBase={robot.profile.driveBase} intake={robot.profile.intake} />
                </button>
              ))}
            </div>
            <span className="text2">For more information of all teams, click on the search icon</span>
          </div>
        </div>
      </div>
    </>
  );
}