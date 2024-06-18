// App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SearchProvider } from "./Components/Context/SearchContext";
import { CategoryProvider } from "./Components/Context/CategoryContext";
import NewsPage from "./Components/NewsPage";
import NewsDetail from "./Components/NewsDetails";
import { NewsProvider } from "./Components/Context/NewsContext";

const App = () => {
  return (
    <Router>
      <SearchProvider>
        <CategoryProvider>
          <NewsProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<NewsPage />} />
                <Route path="/news/:newsId" element={<NewsDetail />} />
              </Routes>
            </div>
          </NewsProvider>
        </CategoryProvider>
      </SearchProvider>
    </Router>
  );
};

export default App;
