import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchRobots from './search-nav/SearchRobots.jsx';
import Profile from './search-nav/Profile.jsx';
import MatchStats from './search-nav/MatchStats.jsx';

export default function Search() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchRobots />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/match-stats" element={<MatchStats />} />
      </Routes>
    </Router>
  );
}