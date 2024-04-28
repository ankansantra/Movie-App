import React from 'react'
import './App.css';

const Movie = ({movie, openDetail}) => {
  return (
    <div className='result' onClick={e => openDetail(movie.imdbmovieid)}>
    <div className='border border-dark border-4'>
    <img src={movie.moviemainphotos[0]} alt={movie.movietitle} />
    </div>
    <div className='bg-dark text-white p-2'>
    <h5>{movie.movietitle}</h5>
    </div>
    
   

    </div>
  )
}

export default Movie;