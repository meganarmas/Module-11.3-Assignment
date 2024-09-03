import React, { useState } from 'react';
import CharacterList from './componets/CharacterList';
import CharacterDetail from './componets/CharacterDetail';
import './App.css'


const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [selectedCharacterID, setSelectedCharacterId] = useState(null);

  const handleCharacterSelect = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCharacterName(inputValue);
  };

  return (
      <div className="app">
        <h1>Mastering React Functional Components and Axios with useEffect</h1>
        <h3>Marvel Character Search</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter character name" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Search</button>
        </form>
        <CharacterList
          characterName={characterName}
          onCharacterSelect={handleCharacterSelect} />
        {selectedCharacterID && ( 
          <CharacterDetail characterId={selectedCharacterID} />
        )}
      </div>
  );
};

export default App
