import React, { useState, useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import SearchRobotsSkeleton from '../../search/SearchRobotsSkeleton.jsx';
import StatGlimpse from '../../home/StatGlimpse.jsx';
import axios from 'axios';
import './SearchRobots.css';

export default function SearchRobots() {
  const navigate = useNavigate();
  const [genData, setGenData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/robotList')
      .then((response) => {
        setGenData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all data
      })
      .catch((error) => {
        console.error("Error making GET Request: SearchRobots, robotList: ", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = genData.filter(robot =>
      robot.profile.teamName.toLowerCase().includes(query) ||
      robot.profile.teamNumber.toString().includes(query)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <div className="topPiece" />
      <div className="middlePiece">
        <span className="header">Get Started Scouting</span>
        <div className="searchSection">
          <IonIcon name="search-outline" className="searchIcon"/>
          <input
            className="searchbar"
            placeholder={'Search'}
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="viewScoutingData">
          <div className="scrollView">
            <div className="scoutingDataGlimpses">
              <Suspense fallback={<SearchRobotsSkeleton />}>
                {filteredData?.map((robot) => (
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
  );
}