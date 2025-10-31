# Bot Battlr

This a Bot Battlr Browse through a list of robots, view their details, and enlist them into your army.

## Features

`Browse Bots`: View all available bots with their stats and information
`Enlist Bots`: Add bots to your army (each bot can only be enlisted once)
`View Bot Details`: Click on any bot to see detailed information
`Release Bots`: Remove bots from your army without deleting them
`Discharge Bots`: Permanently remove bots from both your army and the server

### Technologies used

React: Frontend framework for building the user interface
json-server: Mock API server for development
CSS: Styling for the application

#### Usage

Browse Bots: The main page displays all available bots in a grid layout.
View Bot Details: Click on any bot card to see detailed information.
Enlist Bots: Click the "Enlist" button to add a bot to your army.
Manage Your Army: In the "Your Bot Army" section, you can release or discharge bots.

##### project structure

bot-battlr/
|- public/
- index.html...
|- src/
|   - components/
|   │   - BotArmyCard.css
    |   - BotArmyCard.jsx
|   │   - BotCard.css
|   |   - BotCard.jsx
|   │   - BotCollection.css
|   │   - BotCollection.jsx
|   │   - YourBotArmy.css
|   │   - YourBotArmy.jsx
|   |- App.css
|   |- App.jsx
|   |- index.css
|   |- index.js
|   |- db.json
|- package.json
|- README.md

### Installation

1. Clone the repository:
git clone git@github.com:David-kuron1996/code-challenge-bolt.git

cd bot-battlr


2. Install dependencies:
```bash
npm install

3. Start the JSON server:

npm run server
This will start a local server at http://localhost:3000/bots

In a separate terminal, start the React app:

npm start
Open your browser and navigate to http://localhost:3000/bots




 