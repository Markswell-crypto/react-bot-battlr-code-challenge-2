// This component fetches bot data and renders 
// a list of bot cards using the BotCard component.
import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import SelectedBots from './SelectedBots';

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    // Fetch data from api
    fetch('https://api.jsonbin.io/v3/b/655f8f7b0574da7622cabfc6', {
      method: "GET",
      headers: {
        'X-Master-Key': '$2a$10$95KRuFKagoLkdYMJKD2rEudGv1q0k9JhfFiVQBWgxngmdWLR5hDmy',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Api Response:", data)
        const botsArray = data.record.bots; 
        console.log("Api Response:", botsArray) 
      setBots(botsArray);
        // setBots(data.bots)
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const onDeleteBot = (botId) => {
    // Send a request to your server to delete the bot
    fetch(`https://api.jsonbin.io/v3/b/655f8f7b0574da7622cabfc6'${botId}`, {
      method: 'DELETE',
      headers: {
        'X-Master-Key': '$2a$10$95KRuFKagoLkdYMJKD2rEudGv1q0k9JhfFiVQBWgxngmdWLR5hDmy',
      },
    })
      .then(() => {
        // Update the state to remove the deleted bot
        const updatedBots = bots.filter((bot) => bot.id !== botId);
        setBots(updatedBots);
      })
      .catch((error) => console.error('Error deleting bot:', error));

    // Remove the bot from the selectedBots list if it was selected
    const updatedSelectedBots = selectedBots.filter((selectedBot) => selectedBot.id !== botId);
    setSelectedBots(updatedSelectedBots);
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
        {/* Conditional rendering check before using map */}
        {bots && bots.map((bot) => (
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
