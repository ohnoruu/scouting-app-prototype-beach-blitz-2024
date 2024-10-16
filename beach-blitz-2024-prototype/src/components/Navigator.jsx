//Navigation Bar
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import { Home, Search, Record, Settings } from '../index.js';
import IonIcon from '@reacticons/ionicons';
import './Navigator.css';

export default function Navigator() {
  return (
      <div className="tabNavigator">
        <nav className="tabBar">
          <NavLink exact to="/" className="tabLink" activeClassName="activeTab">
            <IonIcon name="home-outline" className="icon"/>
          </NavLink>
          <NavLink to="/search" className="tabLink" activeClassName="activeTab">
            <IonIcon name="search-outline" className="icon"/>
          </NavLink>
          <NavLink to="/record" className="tabLink" activeClassName="activeTab">
            <IonIcon name="add-circle-outline" className="icon"/>
          </NavLink>
          <NavLink to="/settings" className="tabLink" activeClassName="activeTab">
            <IonIcon name="settings-outline" className="icon"/>
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" component={<Home/>} />
          <Route path="/search" component={<Search/>} />
          <Route path="/record" component={<Record/>} />
          <Route path="/settings" component={<Settings/>} />
        </Routes>

        <div className="tabContent">
          <Outlet/>
        </div>
      </div>
  );
}