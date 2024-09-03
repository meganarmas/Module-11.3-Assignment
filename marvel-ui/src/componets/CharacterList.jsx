import { useState, useEffect} from 'react';
import axios from 'axios';

const CharacterList = ({ characterName, onCharacterSelect }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacter = async () =>{
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
                    params: {
                        ts: '1',
                        apikey: '5f16720cafa4084ce0053c88f5e13f3a',
                        hash: 'f3d03616f96881673978ee4cea4028b1',
                        name: characterName
                    }
                });
                setCharacters(response.data.data.results);
            } catch (error) {
                console.log('Error.', error)
            }
        };
        if (characterName); {
            fetchCharacter();
        }
    }, [characterName]);

    return (
        <div>
            <h3>Character</h3>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                            <img src= {`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            style={{ width: '100px', height: '100px'}}
                            />
                    <p>Name: {character.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default CharacterList;