import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // Fetch bots from the server
  useEffect(() => {
    fetch('https://json-server-vercel-azure-psi.vercel.app/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  // Add bot to army
  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release bot from army
  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  // Discharge bot permanently
  const dischargeBot = (botId) => {
    // Remove from army
    setArmy(army.filter(bot => bot.id !== botId));
    
    // Remove from server
    fetch(`https://json-server-vercel-azure-psi.vercel.app/bots${botId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        // Update the bots list
        setBots(bots.filter(bot => bot.id !== botId));
      }
    })
    .catch(error => console.error('Error discharging bot:', error));
  };

  // View bot details
  const viewBotDetails = (bot) => {
    setSelectedBot(bot);
  };

  // Go back to bot list
  const goBackToList = () => {
    setSelectedBot(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Bot Battlr</h1>
        <p>Build Your Bot Army!</p>
      </header>
      
      <main className="app-main">
        {selectedBot ? (
          <div className="bot-specs">
            {/* BotSpecs component would go here */}
            <button onClick={goBackToList}>Back to List</button>
            <h2>{selectedBot.name}</h2>
            <img src={selectedBot.avatar_url} alt={selectedBot.name} />
            <p>Class: {selectedBot.bot_class}</p>
            <p>Health: {selectedBot.health}</p>
            <p>Damage: {selectedBot.damage}</p>
            <p>Armor: {selectedBot.armor}</p>
            <p>Catchphrase: {selectedBot.catchphrase}</p>
            <button onClick={() => enlistBot(selectedBot)}>Enlist Bot</button>
          </div>
        ) : (
          <>
            <YourBotArmy 
              army={army} 
              onRelease={releaseBot} 
              onDischarge={dischargeBot} 
            />
            <BotCollection 
              bots={bots} 
              onEnlist={enlistBot} 
              onViewDetails={viewBotDetails} 
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;