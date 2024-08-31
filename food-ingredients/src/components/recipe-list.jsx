
import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ imageUrl, title, publisher, id }) {
    return (
        <div className="recipe-list">
            <div className="recipe">
                <img src={imageUrl} alt={title} width={270} height={180} />
                <p className="publisher">Publisher: {publisher}</p>
                <p className="title">{title}</p>
                <Link to={`/recipe/${id}`}>
                    <button className="show-more">Show More</button>
                </Link>
            </div>
        </div>
    );
}

export default RecipeList;
