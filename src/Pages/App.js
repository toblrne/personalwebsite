import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

import "./App.scss"

const App = () => {
  return (
    <div className="main-container">
      <div>
        <Navbar />
        <div className="main-content-container">
          <Sidebar />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


