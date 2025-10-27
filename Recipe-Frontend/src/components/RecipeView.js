import React, { useEffect, useState } from "react";
import { getRecipeById } from "../services/recipeService";
import { useParams, Link } from "react-router-dom";

const RecipeView = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRecipeById(id).then(({ data }) => setRecipe(data));
  }, [id]);

  if (!recipe) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="card shadow-sm p-4">
      <h2>{recipe.title}</h2>
      <p className="text-muted">
        Category: <strong>{recipe.category || "N/A"}</strong> <br />
        Cooking Time: <strong>{recipe.cookingTime} mins</strong>
      </p>

      <h5>Ingredients</h5>
      <ul className="list-group mb-3">
        {recipe.ingredients.map((i, idx) => (
          <li key={idx} className="list-group-item">
            {i}
          </li>
        ))}
      </ul>

      <h5>Instructions</h5>
      <ol className="list-group list-group-numbered mb-4">
        {recipe.instructions.map((s, idx) => (
          <li key={idx} className="list-group-item">
            {s}
          </li>
        ))}
      </ol>

      <Link to="/" className="btn btn-outline-dark">⬅ Back to Recipes</Link>
    </div>
  );
};

export default RecipeView;
