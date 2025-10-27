import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllRecipes, deleteRecipe } from "../services/recipeService";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    const { data } = await getAllRecipes();
    setRecipes(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      await deleteRecipe(id);
      loadRecipes();
    }
  };

  return (
    <div>
      <h2 className="mb-4">All Recipes</h2>
      {recipes.length === 0 ? (
        <div className="alert alert-info">No recipes found. Try adding one!</div>
      ) : (
        <div className="row">
          {recipes.map((r) => (
            <div key={r.id} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{r.title}</h5>
                  <p className="card-text text-muted mb-2">
                    <strong>Category:</strong> {r.category || "N/A"} <br />
                    <strong>Cooking Time:</strong> {r.cookingTime} mins
                  </p>
                  <div className="d-flex justify-content-between">
                    <Link to={`/recipes/${r.id}`} className="btn btn-sm btn-primary">View</Link>
                    <Link to={`/edit/${r.id}`} className="btn btn-sm btn-warning">Edit</Link>
                    <button onClick={() => handleDelete(r.id)} className="btn btn-sm btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
