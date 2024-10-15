//Navigation Bar
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Switch } from 'react-router-dom';
import { Home, Search, Record, Settings } from '../index.js';
import './Navigator.css';

export default function Navigator() {
  return (
    <Router>
      <div className="tabNavigator">
        <nav className="tabBar">
          <NavLink exact to="/" className="tabLink" activeClassName="activeTab">
            <img src = ''/>
          </NavLink>
          <NavLink to="/search" className="tabLink" activeClassName="activeTab">
            <img src = ''/>
          </NavLink>
          <NavLink to="/record" className="tabLink" activeClassName="activeTab">
            <img src = ''/>
          </NavLink>
          <NavLink to="/settings" className="tabLink" activeClassName="activeTab">
            <img src = ''/>
          </NavLink>
        </nav>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/record" component={Record} />
          <Route path="/settings" component={Settings} />
        </Routes>
      </div>
    </Router>
  );
}