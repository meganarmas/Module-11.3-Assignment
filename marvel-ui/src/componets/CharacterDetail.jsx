import React, { useState, useEffect} from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
    const [characterDetails, setCharacterDetail] = useState(null);

    useEffect(() => {
        constFetchCharacterDetail = async () =>{
            try {
                const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}`, {
                    params: { ts: 1,
                        privateKey: '4d52fb3fa1ef52af3d6b38218aff5477',
                        hash: 'a80ea7d0806646c1f3b6bf37422fc6fd'
                    }
                });
                setCharacterDetail(response.data.data.results[0]);
            } catch (error) {
                console.log('Error.')
            }
        };
        fetchCharacterDetail();
    }, [characterId]);
    
    if (!characterDetails) return <div>Loading...</div>
    return(
        <div>
            <h3>{characterDetails.name}</h3>
            <p>{characterDetails.description}</p>
            <h3>Comics:</h3>
            <ul>
                {characterDetails.comics.items.map((comic, index) => (
                <li key={index}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default CharacterDetail;