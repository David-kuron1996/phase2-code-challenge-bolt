import React from 'react';
import BotCard from './BotCard';
import './BotCollection.css';

function BotCollection({ bots, onEnlist, onViewDetails }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onEnlist={onEnlist} 
            onViewDetails={onViewDetails} 
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;