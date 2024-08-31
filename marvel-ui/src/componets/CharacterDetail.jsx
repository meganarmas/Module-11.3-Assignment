import { Component } from "react";
import axios from 'axios'


const CharacterDetail = asynch () => {
    const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=${privateKey}&hash=${hash}&ts=${ts}`);
    setDetails(response.data);
}



export default CharacterDetail