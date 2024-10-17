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
          <NavLink 
          exact to="home" 
          className={({ isActive }) => isActive ? 'activeTab' : 'tabLink'}
          >
            <IonIcon name="home-outline" className="icon"/>
          </NavLink>
          <NavLink 
          to="search" 
          className = {({ isActive }) => isActive ? 'activeTab' : 'tabLink'}
          >
            <IonIcon name="search-outline" className="icon"/>
          </NavLink>
          <NavLink 
          to="record" 
          className= {({ isActive }) => isActive ? 'activeTab' : 'tabLink'}
          >
            <IonIcon name="add-circle-outline" className="icon"/>
          </NavLink>
          <NavLink 
          to="settings" 
          className= {({ isActive }) => isActive ? 'activeTab' : 'tabLink'}
          >
            <IonIcon name="settings-outline" className="icon"/>
          </NavLink>
        </nav>
        <div className="tabContent">
          <Outlet/>
        </div>
      </div>
  );
}