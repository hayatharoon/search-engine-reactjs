import React, { createContext, useState, useContext } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('Elon Musk');

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': 'dc1f338c62mshd6b06f719209724p1fe2c8jsn63cf36b22918',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      },
    });

    const data = await response.json();

    setResults(data);
    setIsLoading(false);
  };

  return <ResultContext.Provider value={{ getResults, results, searchItem, setSearchItem, isLoading }}>{children}</ResultContext.Provider>;
};

export const useResultContext = () => useContext(ResultContext);
