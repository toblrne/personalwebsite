import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

import "./App.scss"

import { useSelector } from 'react-redux'

const App = () => {

  const { mode } = useSelector((state) => state.toggleMode);

  return (
    <div className={`${"main-container"} ${mode}`}>
      <div className={`${"secondary-container"} ${mode}`}>
        <Navbar />
        <div className={`${"main-content-container"} ${mode}`}>
          <Sidebar />
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


