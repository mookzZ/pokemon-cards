import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const pokemonData = [];

    for (let i = 1; i <= 21; i++) {
      try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await resp.data;
        pokemonData.push(data);
      } catch (error) {
        console.error("Ошибка: ", error);
      }
    }

    setPokemons(pokemonData);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <h1>POKEMONS</h1>
        <div className="pokemons">
          {pokemons.map((pokemon) => (
            <div key={pokemon.id} className={'pokemon'}>
              <h2>{pokemon.name}</h2>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width="100"
                height="100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
