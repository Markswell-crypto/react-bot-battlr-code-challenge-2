import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

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
          <div key={bot.id} className="col-md-2 mb-3">
            <BotCard bot={bot} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
