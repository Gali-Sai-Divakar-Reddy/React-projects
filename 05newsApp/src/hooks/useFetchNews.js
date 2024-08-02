import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const useFetchNews = ({ type, query='', country='us', category='', }) => {
  const [ news, setNews ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const apiKey = ''

  const getUrl = useCallback(() => {
    switch(type) {
        case 'search':
            return `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
        case 'topHeadLines':
            return `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
        case 'categoryNews':
            return `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
        default:
            return `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${apiKey}`;
    }
  }, [type, query, country, category, apiKey]);

  useEffect(() => {
    const fetchNews = async () => {
        setLoading(true);
        setError(true);
        try {
            const response = await axios.get(getUrl());
            if (response.data.status === 'ok'){
                console.log(response.data);
                setNews(response.data.articles);
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    fetchNews();

  }, [getUrl]);

  return { news, loading, error };
}

export default useFetchNews