import React, {useState} from "react";
import axios from 'axios';

const ApiPokemon = () => {

  const [pokemons, setPokemons] = useState([])

  const obtenerDatos = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response => {
          setPokemons([...response.data.results])
        })
  };

  return (
    <div>
      <button onClick={obtenerDatos}>Fetch Pokemon</button>
      <div className="results">
        {pokemons.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)}
      </div>
    </div>
  );
};

export default ApiPokemon;
