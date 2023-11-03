import React from 'react';

const botTypeClasses = {
  Assault: 'icon military',
  Defender: 'icon shield',
  Support: 'icon plus circle',
  Medic: 'icon ambulance',
  Witch: 'icon magic',
  Captain: 'icon star',
};

const BotCard = ({ bot, action, removeCard }) => {
  const handleClick = () => {
    action(bot);
  };

  const handleDischarge = (e) => {
    e.stopPropagation();
    removeCard(bot);
  };

  return (
    <div className="col-md-3 mb-3">
      <div className="card" onClick={handleClick}>
        <img src={bot.avatar_url} alt={bot.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {bot.name} <i className={botTypeClasses[bot.bot_class]} />
          </h5>
          <p className="card-text text-wrap">
            <small>{bot.catchphrase}</small>
          </p>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <span>
              <i className="icon heartbeat" /> {bot.health}
            </span>
            <span>
              <i className="icon lightning" /> {bot.damage}
            </span>
            <span>
              <i className="icon shield" /> {bot.armor}
            </span>
            <span>
              <button
                className="btn btn-danger btn-sm"
                onClick={handleDischarge}
              >
                x
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
