import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchRobots from './search-nav/SearchRobots.jsx';
import Profile from './search-nav/Profile.jsx';
import MatchStats from './search-nav/MatchStats.jsx';

export default function Search() {
  return (
    <Routes>
      <Route path="/" element={<SearchRobots />} />
      <Route path="profile/:teamNumber" element={<Profile />} />
      <Route path="match-stats" element={<MatchStats />} />
    </Routes>
  );
}