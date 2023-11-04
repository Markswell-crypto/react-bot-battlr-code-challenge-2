import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';
import SelectedBots from './components/SelectedBots';

function App() {
  return (
    <Router>
      <br></br>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<BotCollection />} />
          <Route path="/your-bot-army" element={<SelectedBots />} />
          <Route path="/bot/:id" element={<BotSpecs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
