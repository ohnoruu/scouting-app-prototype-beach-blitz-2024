import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
//import { SearchIcon } from '../../../index.js';
import SearchRobotsSkeleton from '../../search/SearchRobotsSkeleton.jsx';
import StatGlimpse from '../../home/StatGlimpse.jsx';
import axios from 'axios';
import './SearchRobots.css';

export default function SearchRobots() {
  const navigate = useNavigate();
  const [genData, setGenData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3000/robotList')
      .then((response) => {
        setGenData(response.data);
      })
      .catch((error) => {
        console.error("Error making POST Request: SearchRobots, robotList: ", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="topPiece" />
        <div className="middlePiece">
          <span className="header">Get Started Scouting</span>
          <div className="searchSection">
            <img src="https://static.vecteezy.com/system/resources/previews/024/722/367/non_2x/fish-with-ai-generated-free-png.png" />
            <input
              className="searchbar"
              placeholder={'Search'}
              // value={searchQuery}
              // onChange={setSearchQuery}
            />
          </div>
          <div className="viewScoutingData">
            <div className="scrollView">
              <div className="scoutingDataGlimpses">
                <Suspense fallback={<SearchRobotsSkeleton />}>
                  {genData?.map((robot) => (
                    <div
                      key={robot.profile.teamNumber}
                      onClick={() => {
                        navigate('/profile', { state: { teamNumber: robot.profile.teamNumber } });
                      }}
                      className="pressable"
                    >
                      <StatGlimpse
                        name={robot.profile.teamName}
                        teamNumber={robot.profile.teamNumber}
                        driveBase={robot.profile.driveBase}
                        intake={robot.profile.intake}
                      />
                    </div>
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}