import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';
import BotSpecs from './BotSpecs';

function BotsHome() {
  const [botCollection, setBotCollection] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [collectionVisible, setCollectionVisible] = useState(true);
  const [botSpecs, setBotSpecs] = useState({});

  useEffect(() => {
    // Fetch bot data from the API
    fetch('http://localhost:6001/bots')
      .then((response) => response.json())
      .then((bots) => {
        setBotCollection(bots);
        setFilteredCollection(bots);
      })
      .then(() => console.log('Bots Fetched!'));
  }, []);

  // Function to add a bot to the army
  const addToArmy = (bot) => {
    const newCollection = filteredCollection.filter((card) => card.bot_class !== bot.bot_class);
    setFilteredCollection(newCollection);
    setBotArmy([...botArmy, bot]);
    setCollectionVisible(true);
  };

  // Function to remove a bot from the army
  const removeFromArmy = (bot) => {
    const newArmy = botArmy.filter((card) => card.id !== bot.id);
    const armyClasses = newArmy.map((bot) => bot.bot_class);
    const newCollection = botCollection.filter((bot) => !armyClasses.includes(bot.bot_class));
    setBotArmy(newArmy);
    setFilteredCollection(newCollection);
  };

  // Function to permanently remove a bot
  const removeBotPermanently = (bot) => {
    let newCollection = botCollection.filter((card) => card !== bot);
    let newFilteredCollection = filteredCollection.filter((card) => card !== bot);
    let newArmy = botArmy.filter((card) => card !== bot);

    setBotCollection(newCollection);
    setFilteredCollection(newFilteredCollection);
    setBotArmy(newArmy);

    // Delete the bot from the backend
    fetch(`http://localhost:6001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  // Function to display bot details
  const displayBotSpecs = (bot) => {
    setCollectionVisible(false);
    setBotSpecs(bot);
  };

  // Function to go back to the bot collection view
  const displayBotCollection = () => {
    setCollectionVisible(true);
  };

  return (
    <div>
      <BotArmy bots={botArmy} action={removeFromArmy} removeCard={removeBotPermanently} />
      {collectionVisible ? (
        <BotCollection botCollection={filteredCollection} action={displayBotSpecs} removeCard={removeBotPermanently} />
      ) : (
        <BotSpecs bot={botSpecs} back={displayBotCollection} enlist={addToArmy} />
      )}
    </div>
  );
}

export default BotsHome;
