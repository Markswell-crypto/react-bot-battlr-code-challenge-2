import React from 'react';
import { Link } from 'react-router-dom';

function BotCard({ bot }) {
  return (
    <div className="col-md-4 mb-4">
    <div className="card">
      <img src={bot.avatar_url} alt={bot.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">Class: {bot.bot_class}</p>
        <p className="card-text">Health: {bot.health}</p>
        <p className="card-text">Damage: {bot.damage}</p>
        <p className="card-text">Armor: {bot.armor}</p>
        <Link to={`/bot/${bot.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  </div>
  );
}

export default BotCard;
