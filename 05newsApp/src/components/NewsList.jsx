import React from 'react'

const NewsList = ({ news, loading, error }) => {
  return (
    <div className="bg-white  border-b-4 border-gray-800 w-1/2  mt-5 mb-5 lg:flex flex-wrap gap-2">
        { loading && <p>Loading ...</p>}
        { error && <p className='text-red-600'>error: {error}</p>}
        {news.map((article, index) => (
            <div key={index}>
                <img src={article.urlToImage} alt={article.title} className="w-full object-cover h-32 sm:h-48 md:h-64"></img>
                <div className="p-4 md:p-6">
                    <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">{article.source.name}</p>
                    <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">{article.title}</h3>
                    <div className="text-sm flex items-center">
                    
                    <p className="leading-none">{new Date(article.publishedAt).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                        }).replace(/ /g, ' ')}
                    </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NewsList