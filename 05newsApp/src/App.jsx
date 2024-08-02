import { useState } from "react"
import SearchBar from "./components/SearchBar"
import Filters from "./components/Filters"
import NewsList from "./components/NewsList"
function App() {

  const [ searchQuery, setSearchQuery ] = useState('')
  const [ country, setCountry ] = useState('us')
  const [ category, setCategory ] = useState('')
  // const [ source, setSource ] = useState('')
  // const [ type, setType ] = useState('')
  const [ filters, setFilters ] = useState({ country: 'us', category: ''})

  const news = [
    {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Russia prisoner swap: 24 freed in biggest exchange with West since Cold War",
      "description": "Some 16 prisoners were released by Russia, including US citizens Evan Gershkovich and Paul Whelan.",
      "url": "https://www.bbc.co.uk/news/articles/c29d6k382k5o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/302c/live/a69a27d0-5049-11ef-8f0f-0577398c3339.jpg",
      "publishedAt": "2024-08-02T01:22:13.8163148Z",
      "content": "German citizen Rico Krieger, who was sentenced to death in Belarus before being pardoned by the country's leader Alexander Lukashenko earlier this week, has also been released.\r\nOthers included in th… [+1934 chars]"
      },
      {
      "source": {
      "id": "bbc-news",
      "name": "BBC News"
      },
      "author": "BBC News",
      "title": "Paul Whelan heads home, after 2,043 days in a Russian prison",
      "description": "The BBCs Sarah Rainsford recalls phone conversations with the ex-US marine while he was imprisoned in Russia.",
      "url": "https://www.bbc.co.uk/news/articles/c4ngn52zpnno",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/59d2/live/fdc50470-505e-11ef-b6c3-23526e681b8d.png",
      "publishedAt": "2024-08-02T01:22:12.5978689Z",
      "content": "For a long time, Mr Whelan was relentlessly upbeat about his fate. \r\nHe was convinced the US government would get him out, even as relations between Russia and the West slid from awful to much worse.… [+759 chars]"
      },
  ];

  const handleSearch = () => {
    setType('search');
  };

  const handleTopHeadlines = () => {
    setType('topHeadlines');
  };

  const handleNewsBySource = () => {
    setType('newsBySource');
  };

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
      />
    </div>
  )
}

export default App
