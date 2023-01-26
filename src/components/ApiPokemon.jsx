import React, {useState} from "react";

const ApiPokemon = () => {

  const [pokemons, setPokemons] = useState([])

  const obtenerDatos = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
          .then(response => {
            return response.json();
        }).then(response => {
            setPokemons([...response.results])
        }).catch(err=>{
            console.log(err);
        });

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
