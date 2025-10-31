import React from 'react';
import BotArmyCard from './BotArmyCard';
import './YourBotArmy.css';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>Your army is empty. Enlist some bots!</p>
      ) : (
        <div className="army-grid">
          {army.map(bot => (
            <BotArmyCard 
              key={bot.id} 
              bot={bot} 
              onRelease={onRelease} 
              onDischarge={onDischarge} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;