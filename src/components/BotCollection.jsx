import React, { useState, useEffect } from 'react';
import BotCard from './components/BotCard';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch data from your API (http://localhost:3000/bots)
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Bot Collection</h1>
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
