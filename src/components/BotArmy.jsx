// This component manages the enlisted bots, allowing users to add and release them. 
// It uses the useState hook to maintain the enlisted bots list.
import React, { useState } from 'react';

function BotArmy() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Function to enlist a bot
  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    if (!enlistedBots.find((b) => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  // Function to release a bot
  const releaseBot = (bot) => {
    const updatedBots = enlistedBots.filter((b) => b.id !== bot.id);
    setEnlistedBots(updatedBots);
  };

  return (
    <div>
      <h1>Your Bot Army</h1>
      <ul>
        {enlistedBots.map((bot) => (
          <li key={bot.id}>
            {bot.name} - {bot.bot_class}
            <button onClick={() => releaseBot(bot)} className="btn btn-danger btn-sm ml-2">
              Release
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotArmy;
