import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { DatePicker } from 'antd';
function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
      <DatePicker />
    </div>
  );
}

export default App;
