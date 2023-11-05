// This component fetches bot data and renders 
// a list of bot cards using the BotCard component.
import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import SelectedBots from './SelectedBots';

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    // Fetch data from db.json
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const onDeleteBot = (botId) => {
    // Send a request to your server to delete the bot
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the state to remove the deleted bot
        const updatedBots = bots.filter((bot) => bot.id !== botId);
        setBots(updatedBots);
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };
  const onSelectBot = (bot) => {
    // Check if the bot is already selected
    if (!selectedBots.find((b) => b.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  const removeBot = (bot) => {
    const updatedBots = selectedBots.filter((b) => b.id !== bot.id);
    setSelectedBots(updatedBots);
  };

  return (
    <div className="container">

    <SelectedBots selectedBots={selectedBots} removeBot={removeBot} />
      <br />
      <h1 className="bg-primary text-white text-center">Bot Collection</h1>
      <div className="row">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onSelectBot={onSelectBot}
            selected={selectedBots.some((selectedBot) => selectedBot.id === bot.id)}
            onDeleteBot={onDeleteBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
