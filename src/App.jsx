import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap'
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route path="/your-bot-army" element={<BotArmy />} />
          <Route path="/bot/:id" element={<BotSpecs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
