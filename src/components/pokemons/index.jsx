import React, { useEffect, useState, useRef, startTransition } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import SearchForName from './SearchForName';
import GridPagination from './PaginationGrid';
import PokemonList from './PokemonList';
import BarForFilter from './BarForFilter';

const PokemonGrid = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [searchItem, setSearchItem] = useState('');
  const [searchItemType, setSearchItemType] = useState('');
  const { type } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollPositionRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchPokemonData = async (url, page = 0, limit = 10) => {
    setLoading(true);
    try {
      let fullUrl = `${url}?offset=${page * limit}&limit=${limit}`;

      if (searchItem) {
        fullUrl = `https://pokeapi.co/api/v2/pokemon/${searchItem}`;
      }

      const response = await fetch(fullUrl);
      const data = await response.json();

      if (data.results) {
        const pokemonDetailsPromises = data.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          const detailsData = await detailsResponse.json();
          return detailsData;
        });

        const detailedPokemonData = await Promise.all(pokemonDetailsPromises);
        setPokemonList(detailedPokemonData);
        setTotalItems(data.count);
      } else {
        setPokemonList([data]);
        setTotalItems(0);
      }
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
    setLoading(false);
  };

  const handleSearch = (item) => {
    setSearchItem(item);
  };

  const handleTypeClick = async (type) => {
    setLoading(true);
    setSearchItemType(type);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();

      if (data.pokemon) {
        const pokemonDetailsPromises = data.pokemon.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.pokemon.url);
          const detailsData = await detailsResponse.json();
          return detailsData;
        });

        const detailedPokemonData = await Promise.all(pokemonDetailsPromises);
        setPokemonList(detailedPokemonData);
        setTotalItems(data.pokemon.length);
        setCurrentPage(0);
      } else {
        console.error('No pokemon found for the type:', type);
      }
    } catch (error) {
      console.error('Error fetching Pokemon data by type:', error);
    }
    setLoading(false);
  };

  const handlePokemonClick = (pokemonId) => {
    startTransition(() => {
      navigate(`/pokemon/${pokemonId}`);
    });
  };

  useEffect(() => {
    fetchPokemonData('https://pokeapi.co/api/v2/pokemon', currentPage, pageSize);
  }, [currentPage, pageSize, searchItem]);

  useEffect(() => {
    if (type) {
      handleTypeClick(type);
    } else {
      fetchPokemonData('https://pokeapi.co/api/v2/pokemon', currentPage, pageSize);
    }
  }, [type, currentPage, pageSize]);

  useEffect(() => {
    window.scrollTo(0, scrollPositionRef.current);
  }, [pokemonList]);

  return (
    <div>
      {searchItemType ? (
        <div className="pagination-container">
          <BarForFilter
            searchItemType={searchItemType}
            setSearchItemType={setSearchItemType}
            navigate={navigate}
            fetchPokemonData={fetchPokemonData}
          />
        </div>
      ) : (
        <div className="pagination-container">
          <SearchForName onSearch={handleSearch} />
          <GridPagination
            totalItems={totalItems}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </div>
      )}
      <div className="pokemons-container">
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <CircularProgress />
          </Box>
        ) : (
          <PokemonList
            pokemonList={pokemonList}
            handleTypeClick={handleTypeClick}
            handlePokemonClick={handlePokemonClick}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonGrid;
