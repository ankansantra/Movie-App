import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import { movieData } from './assets';
import Movie from './Movie';
import Details from './Details';

function App() {
  const [state, setState] = useState({
    search: '',
    selected: {},
    movieList: [], 
  });

  useEffect(() => {
    // Initialize movieList state with movieData
    setState((prevState) => ({
      ...prevState,
      movieList: movieData,
    }));
  }, []);

  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };

  const openDetail = (id) => {
    const selectedMovie = movieData.find((movie) => movie.imdbmovieid === id);
    setState((prevState) => {
      return { ...prevState, selected: selectedMovie };
    });
  };

  const SearchResult = (event) => {
    if (event.key === 'Enter') {
      const filteredMovies = movieData.filter((movie) =>
        movie.movietitle.toLowerCase().includes(state.search.toLowerCase()) ||
        movie.moviegenres.some((genre) => genre.toLowerCase().includes(state.search.toLowerCase())) ||
        movie.movielanguages.some((language) => language.toLowerCase().includes(state.search.toLowerCase())) ||
        movie.moviecountries.some((country) => country.toLowerCase().includes(state.search.toLowerCase()))
      );
      setState((prevState) => {
        return { ...prevState, movieList: filteredMovies };
      });
    }
  };

  const close = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const handleHeadingClick = () => {
    window.location.reload(); 
  };

  return (
    <div className='w-100 main-wrapper d-flex flex-column align-items-center justify-content-center'>
      {state.selected.imdbmovieid ? (
        <Details selected={state.selected} close={close} />
      ) : (
        <header className='w-100 text-center text-white'>
          <h2 className='heading' onClick={handleHeadingClick}>Movie App</h2>
          <Search handleInput={handleInput} SearchResult={SearchResult} />
          <div className='container'>
            {state.movieList.length > 0 ? (
              <div className='row'>
                {state.movieList.map((movie, index) => (
                  <div className='col-12 col-sm-6 col-md-3 col-lg-3 my-2' key={index}>
                    <Movie movie={movie} openDetail={openDetail} />
                  </div>
                ))}
              </div>
            ) : (
              <div className='no-movie'>No Movie Found</div>
            )}
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
