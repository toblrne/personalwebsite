import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main'

import "../Pages.scss"

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content-container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;


