import { useState } from "react"
import SearchBar from "./components/SearchBar"
import Filters from "./components/Filters"
import NewsList from "./components/NewsList"
import useFetchNews from "./hooks/useFetchNews"
function App() {

  const [ searchQuery, setSearchQuery ] = useState('')
  const [ country, setCountry ] = useState('us')
  const [ category, setCategory ] = useState('')
  // const [ source, setSource ] = useState('')
  const [ type, setType ] = useState('')
  const [ filters, setFilters ] = useState({ country: 'us', category: ''})

  const { news, loading, error } = useFetchNews( { type, query: searchQuery, ...filters });


  const handleSearch = () => {
    setType('search');
  };

  const handleTopHeadlines = () => {
    setType('topHeadlines');
  };

  // const handleNewsBySource = () => {
  //   setType('newsBySource');
  // };

  const handleCategoryNews = () => {
    setType('categoryNews');
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();
    setFilters({ country, category});
    setType('filtered');
  };

  return (
    <div className="font-sans flex flex-col h-screen w-full justify-start items-center overflow-y-auto">
      <SearchBar 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      handleSearch={handleSearch}
      />
      <Filters
        country={country}
        setCountry={setCountry}
        category={category}
        setCategory={setCategory}
        handleApplyFilters={handleApplyFilters}

      />
      <NewsList 
      news={news}
      loading={loading}
      error={error}
      />
    </div>
  )
}

export default App
