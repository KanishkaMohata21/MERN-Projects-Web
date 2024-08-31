import React from "react";
import RecipeList from "./recipe-list";

function Favorites({ favoritesList }) {
    return (
        <div className="home">
            {
                favoritesList && favoritesList.length > 0 ?
                    favoritesList.map((recipe) => (
                        <RecipeList
                            key={recipe.id}
                            title={recipe.title}
                            publisher={recipe.publisher}
                            imageUrl={recipe.image_url}
                            id={recipe.id}
                        />
                    )) :
                    <h2 className="no-recipe">No Favorites</h2>
            }
        </div>
    );
}

export default Favorites;
