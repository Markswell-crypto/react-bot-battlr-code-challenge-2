// This component displays detailed information about a selected bot, the user clicks on a "View Details" button in the BotCard component. 
// It also provides an "Enlist in Your Bot Army" button.
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaHeart, FaBolt, FaShieldAlt, FaRegClock, FaRegCalendar } from 'react-icons/fa';

function BotSpecs() {
  const { id } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    // Fetch bot details using the ID
    fetch(`http://localhost:3000/bots/${id}`)
      .then((response) => response.json())
      .then((data) => setBot(data))
      .catch((error) => console.error('Error fetching bot details:', error));
  }, [id]);

  if (!bot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card bg-light">
      <img src={bot.avatar_url} alt={bot.name} className="card-img-top img-fluid" />
        <div className="card-body">
          <h1 className="text-primary">{bot.name}</h1>
          <p className="card-text text-secondary">Class: {bot.bot_class}</p>
          <p className="card-text text-success">
            <FaHeart /> Health: {bot.health}
          </p>
          <p className="card-text text-danger">
            <FaBolt /> Damage: {bot.damage}
          </p>
          <p className="card-text text-warning">
            <FaShieldAlt /> Armor: {bot.armor}
          </p>
          <p className="card-text text-muted">
            <FaRegCalendar /> Created At: {bot.created_at}
          </p>
          <p className="card-text text-muted">
            <FaRegClock /> Updated At: {bot.updated_at}
          </p>
          <Link to={`/your-bot-army`} className="btn btn-primary">
            Enlist in Your Bot Army
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
