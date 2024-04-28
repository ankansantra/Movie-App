import React from 'react'

const Search = ({handleInput, SearchResult}) => {

  
  return (
    <div className='search-input my-5'>
        <input type='text' className='w-50 p-2'
        placeholder='Search Movie...' onChange={handleInput} onKeyDown={SearchResult}></input>
    </div>
  )
}

export default Search