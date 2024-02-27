import React from "react";
import RecipeList from "./recipe-list";

function Home({ recipeList, loading }) {
    if (loading) return <h4>Loading...</h4>;
    return (
        <div className="home">
            {
                recipeList && recipeList.length > 0 ?
                    recipeList.map((recipe) => (
                        <RecipeList
                            key={recipe.id}
                            title={recipe.title}
                            publisher={recipe.publisher}
                            imageUrl={recipe.image_url}
                            id={recipe.id}
                        />
                    )) :
                    <h2 className="no-recipe">Type your Craving to find the starting point of your Delicious Delight....</h2>
            }
        </div>
    );
}

export default Home;

