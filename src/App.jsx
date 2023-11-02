import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap'
import BotCollection from './components/BotCollection';
import BotArmy from './components/BotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={BotCollection} />
          <Route path="/your-bot-army" component={BotArmy} />
          <Route path="/bot/:id" component={BotSpecs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
