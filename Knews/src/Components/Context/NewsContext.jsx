
import React, { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};

const useNews = () => useContext(NewsContext);

export { NewsProvider, useNews };

