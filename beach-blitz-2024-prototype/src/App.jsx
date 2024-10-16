import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Launch from './components/Launch.jsx';
import Welcome from './components/Welcome.jsx';
import Navigator from './components/Navigator.jsx';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Launch />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/navigator" element={<Navigator />}>
                    <Route path="home" element={<Home/>} />
                    <Route path="search" element={<Search/>} />
                    <Route path="record" element={<Record/>} />
                    <Route path="settings" element={<Settings/>} />
                </Route>
            </Routes>
        </Router>
    );
}