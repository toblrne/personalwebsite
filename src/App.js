import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main'

import "./App.scss"

const App = () => {
  return (
    <div className="main-container">
      <Navbar className="nav-container" />
      <div className="main-content-container">
        <Sidebar className="sidebar" />
        <Main className="main"/>
      </div>
    </div>
  );
}

export default App;


