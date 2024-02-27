import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RecipeList from "./recipe-list";

function Navbar({ search, setSearch, setRecipeList }) {
    const [loading, setLoading] = useState(false);

    async function handleSearch(event) {
        event.preventDefault();
        setLoading(true); 
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
            const data = await response.json();
            if (data.data.recipes) {
                setRecipeList(data.data.recipes);
                console.log(RecipeList)
                setSearch('');
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false); 
    }

    return (
        <div className="navbar">
            <h3>
                <NavLink className="Header" to={'/'}>
                    KM Ingredients
                </NavLink>
            </h3>
            <form onSubmit={handleSearch}>
                <div className="searching">
                    <input
                        className="inpt"
                        type="text"
                        name="Search"
                        placeholder="Enter your Craving..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </form>
            <ul>
                <li>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/favorites'}>
                        Favorites
                    </NavLink>
                </li>
            </ul>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default Navbar;
