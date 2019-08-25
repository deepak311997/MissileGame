import React, {useEffect} from 'react';
import './App.css';
import Main from './components/main';
import { PlayerProvider } from './context/player-info';
import { LevelProvider } from './context/game-level-context';

const App: React.FC = () => {

  useEffect(() => {
    console.log('we are in');
  });

  return (
    <div className="App">
      <PlayerProvider>
          <LevelProvider>
            <Main />
          </LevelProvider>
      </PlayerProvider>
    </div>
  );
};

export default App;
