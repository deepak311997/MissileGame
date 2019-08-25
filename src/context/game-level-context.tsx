import React, { useState } from 'react';

const GameLevelContext = React.createContext({});

export const LevelProvider = ({ children }) => {
    const [ level, setLevel ] = useState(1);

    const handleLevelChange = (level) => {
        setLevel(level);
    };

    return <GameLevelContext.Provider value={{
        level,
        handleLevelChange
    }}>
        {children}
    </GameLevelContext.Provider>
};

export default GameLevelContext;
