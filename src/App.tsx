import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Detail, Pokemon } from './interface';
import PokemonCollections from './components/PokemonCollections';

interface Pokemons {
  name: string,
  url: string
}

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [next, setNext] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(true);
  const [detail, setDetail] = useState<Detail>({
    id: 0,
    isOpened: false
  })

  const loadMore = async () => {
    setLoading(true)
    let res = await axios.get(next);
    setNext(res.data.next)
    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(pokemon.url)
      setPokemon((e) => [...e, poke.data])
      setLoading(false)
    })
  }

  useEffect(() => {
    const getPokemon = async () => {
      console.log("Load")
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
      setNext(response.data.next);
      response.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(pokemon.url)
        setPokemon((e) => [...e, poke.data])
        setLoading(false)
      })
    };
    getPokemon();
  }, [])
  return (
    <>
      <div className="App">
        <div className="container">
          <header className='pokemon-header'>Pokemon</header>
          <PokemonCollections pokemons={pokemon}
            detail={detail}
            setDetail={setDetail} />
          {!detail.isOpened && (
            <div className="btn">
              <button onClick={loadMore}>
                {loading ? "Loading..." : "Load more"}{" "}
              </button>
            </div>
          )}</div>
      </div></>
  );
}

export default App;
