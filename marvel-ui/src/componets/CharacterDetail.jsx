// src/components/CharacterDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ character }) => {
    const [comics, setComics] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const fetchComics = async () => {
            if (!character) return;
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${character.id}/comics`, {
                    params: {
                        ts: '1',
                        apikey: '5f16720cafa4084ce0053c88f5e13f3a',
                        hash: 'f3d03616f96881673978ee4cea4028b1'
                    }
                });
                setComics(response.data.data.results);
            } catch (error) {
                console.log('Error fetching comics:', error);
            }
        };

        fetchComics();
    }, [character]);

    const handleToggleDetails = () => {
        setShowDetails(prev => !prev);
    };

    if (!character) {
        return <div>Select a character to see details.</div>;
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <button onClick={handleToggleDetails}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && (
                <div>
                    <p>{character.description || 'No description available'}</p>
                    <h3>Comics:</h3>
                    <ul>
                        {comics.map(comic => (
                            <li key={comic.id}>{comic.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CharacterDetail;