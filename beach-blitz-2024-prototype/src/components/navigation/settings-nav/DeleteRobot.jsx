import React, { Suspense, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteRobotSkeleton from '../../settings/DeleteRobotSkeleton';
import { Entypo } from '../../../index.js';
import axios from 'axios';
import './DeleteRobot.css';

export default function DeleteRobot() {
  const navigate = useNavigate();
  const tImg = require('../../assets/images/robbie-transparent.png'); // template image
  const [robotList, setRobotList] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/robotList') // imports data using axios
      .then((response) => { // sets robotList to the data
        setRobotList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setRobotList]); // Updates on page load and when setRobotList changes

  const removeRobot = async (teamNumber) => {
    // remove robot from robotList and update list on screen
    await axios.get(`http://10.0.2.2:3000/removeRobot/${teamNumber}`);
    let newList = await axios.get('http://10.0.2.2:3000/robotList');
    setRobotList((prev) => newList.data);
  };

  const displayData = robotList.map((robot) =>
    <div key={robot.robotID} className="teamSelection" onClick={() => removeRobot(robot.profile.teamNumber)}>
      <div className="teamName">
        <span>{robot.profile.teamNumber} - {robot.profile.teamName}</span>
      </div>
      <img src={tImg} className="teamImage" alt="Robot" />
    </div>
  );

  return (
    <>
      <div className="container">
        <div className="topPiece" />
        <div className="middlePiece">
          <div className="titleContainer">
            <button onClick={() => navigate('/settings-panel')}>
              <Entypo name={'chevron-left'} size={30} color={'#616161'} />
            </button>
            <span className="title">Select Robot to Delete</span>
          </div>

          <span className="subText">This action CANNOT BE UNDONE. DO NOT CLICK PROFILES YOU DO NOT WANT TO DELETE.</span>

          <div className="robotListContainer">
            <Suspense fallback={<DeleteRobotSkeleton />}>
              {displayData}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}