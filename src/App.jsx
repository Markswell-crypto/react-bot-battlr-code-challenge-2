import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={BotCollection} />
          <Route path="/your-bot-army" component={YourBotArmy} />
          <Route path="/bot/:id" component={BotSpecs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
