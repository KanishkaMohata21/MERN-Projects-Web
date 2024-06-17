import React from "react";
import { SearchProvider } from "./Components/Context/SearchContext";
import { CategoryProvider } from "./Components/Context/CategoryContext";
import NewsPage from "./Components/NewsPage";

const App = () => {
  return (
    <SearchProvider>
      <CategoryProvider>
        <div className="App">
          <NewsPage/>
        </div>
      </CategoryProvider>
    </SearchProvider>
  );
};

export default App;
