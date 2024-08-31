import { useState, useEffect} from 'react';
import axios from 'axios';
import CharacterDetail from './CharacterDetail';

const CharacterList = ({ characterName, onCharacterSelect }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        constFetchCharacterDetail = async () =>{
            try {
                const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/`, {
                    params: { ts: 1,
                        privateKey: '4d52fb3fa1ef52af3d6b38218aff5477',
                        hash: 'a80ea7d0806646c1f3b6bf37422fc6fd',
                        name: characterName
                    }
                });
                setCharacterDetail(response.data.data.results[0]);
            } catch (error) {
                console.log('Error.')
            }
        };
        if (characterName); {
            fetchCharacters();
        }
    }, [characterName]);

    return (
        <div>
            <h3>Character</h3>
            <ul>
                {characters.map(charactyer => (
                    <li key={character.id}>
                            <img src= {`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            style={{ width: '100px', height: '200px'}}
                            />
                    <p>Name: {character.name}</p>
                    <button onClick={() => onCharacterSelect(character.id)}>Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default CharacterList