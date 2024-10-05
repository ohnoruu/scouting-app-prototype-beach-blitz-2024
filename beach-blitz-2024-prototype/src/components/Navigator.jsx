import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Home, Search, Record, Settings } from '../index.js';
import { Entypo, AntDesign, Ionicons } from 'react-icons/all';
import './Navigator.css';

export default function Navigator() {
  return (
    <Router>
      <div className="tabNavigator">
        <nav className="tabBar">
          <NavLink exact to="/" className="tabLink" activeClassName="activeTab">
            <Entypo name="home" size={30} />
          </NavLink>
          <NavLink to="/search" className="tabLink" activeClassName="activeTab">
            <AntDesign name="search1" size={30} />
          </NavLink>
          <NavLink to="/record" className="tabLink" activeClassName="activeTab">
            <AntDesign name="pluscircleo" size={30} />
          </NavLink>
          <NavLink to="/settings" className="tabLink" activeClassName="activeTab">
            <Ionicons name="settings-outline" size={30} />
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/record" component={Record} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}