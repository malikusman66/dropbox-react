import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-area">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;

