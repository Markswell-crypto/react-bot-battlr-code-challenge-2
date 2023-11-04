import React from 'react';
import { FaHeart, FaBolt, FaShieldAlt } from 'react-icons/fa'; 

function SelectedBots({ selectedBots, removeBot }) {
  if (!selectedBots || selectedBots.length === 0) {
    return <div>Create a Bot Army for Battle!</div>;
  }

  return (
    <div className="bg-light p-3">
      <h3 className="bg-danger text-white text-center">My Bot Army!</h3>
      <div className="d-flex flex-wrap">
        {selectedBots.map((bot) => (
          <div
            key={bot.id}
            className="m-2 p-2 border rounded text-center"
            onClick={() => removeBot(bot)}
          >
            <img
              src={bot.avatar_url}
              alt={bot.name}
              className="img-thumbnail"
              width="80"
              height="80"
            />
            <p>{bot.name}</p>
            <p>{bot.bot_class}</p>
            <div className="d-flex align-items-center">
            <span className="text-success me-2">
              <FaHeart /> {bot.health}
            </span>
            <span className="text-danger me-2">
              <FaBolt /> {bot.damage}
            </span>
            <span className="text-warning">
              <FaShieldAlt /> {bot.armor}
            </span>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SelectedBots;
