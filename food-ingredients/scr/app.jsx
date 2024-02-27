import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Navbar from "./components/navbar";
import Home from "./components/home";
import Recipe from "./components/recipe"; 
import Favorites from "./components/favourite";

function App() {
    const [search, setSearch] = useState('');
    const [recipeList, setRecipeList] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);
    const [statusOfFav,setStatusOfFav] = useState(false)

    
    function handleFav(currentData) {
        console.log(currentData);
        let cpyFavoritesList = [...favoritesList];
        const index = cpyFavoritesList.findIndex(item => item.id === currentData.id);
        
        if (index === -1) {
            cpyFavoritesList.push(currentData);
            setStatusOfFav(true); 
            console.log(statusOfFav)
        } else {
            cpyFavoritesList.splice(index, 1);
            setStatusOfFav(false); 
            console.log(statusOfFav)
        }
        setFavoritesList([...cpyFavoritesList]);
    }
    
    console.log(favoritesList)

    return (
        <div>
            <div className="container">
                <Navbar search={search} setSearch={setSearch} setRecipeList={setRecipeList} /> 
                <Routes>
                    <Route path="/" element={<Home recipeList={recipeList} loading={loading} />} />
                    <Route 
                        path="/favorites" 
                        element={
                            <div>
                                <Recipe favoritesList={favoritesList} setFavoritesList={setFavoritesList} />
                                <Favorites favoritesList={favoritesList} handleFav={handleFav} />
                            </div>
                        } 
                    />
                    <Route 
                        path="/recipe/:id" 
                        element={<Recipe 
                            recipeDetails={recipeDetails}
                            setRecipeDetails={setRecipeDetails}
                            handleFav={handleFav}
                            statusOfFav={statusOfFav}
                        />} 
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
