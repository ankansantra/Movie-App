import React from 'react'
import "./App.css"
const Details = ({selected,close}) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
    <div className='container mt-5 vh-100'>
        <div className='row'>
            <div className='col-12 col-md-6 text-center'>
                <img src={selected.moviemainphotos} alt=''/>
            </div>
            <div className='col-12 col-md-6 text-white mt-4'>
            <h2 className='movie-title mt-2'><span className="movie-name-text">Movie Name:</span> {selected.movietitle}</h2>
                <p><span>Languages: </span> {selected.movielanguages.join(", ")}</p>
                <p><span>Countries: </span> {selected.moviecountries.join(", ")}</p>
                <p><span>Genres: </span> {selected.moviegenres.join(", ")}</p>
                <button onClick={close} className='btn btn-danger'>Close</button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Details