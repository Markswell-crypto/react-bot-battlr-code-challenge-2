// This component displays detailed information about a selected bot, the user clicks on a "View Details" button in the BotCard component. 
// It also provides an "Enlist in Your Bot Army" button.
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
    <div>
      <h1>Bot Details</h1>
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <Link to={`/your-bot-army`} className="btn btn-primary">
        Enlist in Your Bot Army
      </Link>
    </div>
  );
}

export default BotSpecs;
