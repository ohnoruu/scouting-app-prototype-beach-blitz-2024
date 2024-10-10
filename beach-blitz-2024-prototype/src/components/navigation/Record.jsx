import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CreateProfile from './record-nav/CreateProfile';
import RecordGame from './record-nav/RecordGame';
import SelectProfile from './record-nav/SelectProfile';

export default function Record() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectProfile />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/record-game" element={<RecordGame />} />
      </Routes>
    </Router>
  );
}