import React from 'react'

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className='flex max-w-sm mt-10'>
        <input type="text" 
        className='border border-slate-800 w-80 rounded-md outline-none bg-white p-2 m-2 text-sm font-sans font-normal text-slate-950' 
        placeholder='Search for articles...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
        className='bg-gray-800 text-white w-24 p-2 m-2 rounded-lg text-sm hover:bg-slate-700 hover:ease-in-out duration-200'
        onClick={handleSearch}
        >
            Search
        </button>
    </div>
  )
}

export default SearchBar;
