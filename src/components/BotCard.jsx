// This component displays details of a single bot, including their name, class, health, damage, and armor. 
// It also provides a button to view more details.
import React from 'react';
import { FaHeart, FaBolt, FaShieldAlt } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

function BotCard({ bot, onSelectBot, selected }) {
  return (
    <div className={`col-md-2 mb-2 ${selected ? 'selected' : ''}`} onClick={() => onSelectBot(bot)}>
      <div className="card bg-light">
        <img src={bot.avatar_url} alt={bot.name} className="card-img-top img-fluid" />
        <div className="card-body">
          <h5 className="card-title text-primary">{bot.name}</h5>
          <p className="card-text text-success">{bot.catchphrase}</p>
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
          <br></br>
          <Link to={`/bot/${bot.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BotCard;
