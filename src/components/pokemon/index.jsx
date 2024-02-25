import React, { startTransition, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import PokemonCard from "./PokemonImg";
import SpriteGallery from './sprites';
import StateChart from "./stateChart";
import Abilities from "./abilities";

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    startTransition(() => {
      const fetchPokemonDetail = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await response.json();
          setPokemon(data);
        } catch (error) {
          console.error('Error fetching Pokemon detail: ', error);
        }
      };

      fetchPokemonDetail();
    })
  }, [id]);

  return (
    <div>
      {pokemon ? (
        <div >
          <div className="row-container">
            <PokemonCard pokemon={pokemon}></PokemonCard>
            <Abilities abilities={pokemon.abilities} />
          </div>
          <div className="row-container">
            <StateChart stats={pokemon.stats} />
            <SpriteGallery sprites={pokemon.sprites.versions} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pokemon;
