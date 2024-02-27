import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe({ recipeDetails, setRecipeDetails, favoritesList, setFavoritesList, handleFav ,statusOfFav}) {
    const { id } = useParams();

    useEffect(() => {
        async function fetchDetails() {
            try {
                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
                const data = await response.json();
                if (data?.data) {
                    setRecipeDetails(data.data);
                }
            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        }

        fetchDetails();
    }, [id, setRecipeDetails]);

    return (
        <div className="recipeDetails">
            {recipeDetails && recipeDetails.recipe && (
                <div className="intro">
                    <img className="recipeDetailsImg" src={recipeDetails.recipe.image_url} alt={recipeDetails.recipe.title} />
                    <h2 className="recipeDetailsTitle">{recipeDetails.recipe.title}</h2>
                    <p className="recipeDetailsp">Publisher: {recipeDetails.recipe.publisher}</p>
                </div>
            )}
            {recipeDetails && recipeDetails.recipe && (
                <div>
                    <span className="Ingredients">Ingredients:</span>
                    <ul className="list">
                        {recipeDetails.recipe.ingredients.map((ingredient, index) => (
                            <li className="liItems" key={index}>
                                <span>
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span>
                                    {ingredient.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn" onClick={() => handleFav(recipeDetails.recipe)}>
                        {statusOfFav ? "Remove from favorites" : "Add to favorites"}
                    </button>

                </div>
            )}
        </div>
    );
}

export default Recipe;
