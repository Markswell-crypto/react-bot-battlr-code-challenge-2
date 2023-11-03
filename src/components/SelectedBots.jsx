import React from 'react';

function SelectedBots({ selectedBots, removeBot }) {
  return (
    <div>
      <h2>Selected Bots</h2>
      <ul>
        {selectedBots.map((bot) => (
          <li key={bot.id} onClick={() => removeBot(bot)}>
            {bot.name} - {bot.bot_class}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedBots;
