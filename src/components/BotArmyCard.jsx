import React from 'react';
import './BotArmyCard.css';

function BotArmyCard({ bot, onRelease, onDischarge }) {
  return (
    <div className="bot-army-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <div className="card-actions">
        <button className="release-btn" onClick={() => onRelease(bot.id)}>
          Release
        </button>
        <button className="discharge-btn" onClick={() => onDischarge(bot.id)}>
          x
        </button>
      </div>
    </div>
  );
}

export default BotArmyCard;