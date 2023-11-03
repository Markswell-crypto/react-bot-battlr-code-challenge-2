// This component displays details of a single bot, including their name, class, health, damage, and armor. 
// It also provides a button to view more details.
import React from 'react';
import { Link } from 'react-router-dom';

function BotCard({ bot }) {
  return (
    <div className="col-md-2 mb-2">
      <div className="card bg-light" >
        <img src={bot.avatar_url} alt={bot.name} className="card-img-top img-fluid" />
        <div className="card-body">
          <h5 className="card-title">{bot.name}</h5>
          <p className="card-text-sm text-primary">Class: {bot.bot_class}</p>
          <p className="card-text text-success" >Health: {bot.health}</p>
          <p className="card-text text-danger">Damage: {bot.damage}</p>
          <p className="card-text text-warning">Armor: {bot.armor}</p>
          <Link to={`/bot/${bot.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
