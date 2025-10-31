import React from 'react';
import './BotCard.css';

function BotCard({ bot, onEnlist, onViewDetails }) {
  return (
    <div className="bot-card" onClick={() => onViewDetails(bot)}>
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button className="enlist-btn" onClick={(e) => {
        e.stopPropagation();
        onEnlist(bot);
      }}>
        Enlist
      </button>
    </div>
  );
}

export default BotCard;