import React, { useState, useEffect } from "react";
import { createRecipe, getRecipeById, updateRecipe } from "../services/recipeService";
import { useNavigate, useParams } from "react-router-dom";

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    cookingTime: "",
    category: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getRecipeById(id).then(({ data }) => {
        setRecipe({
          ...data,
          ingredients: data.ingredients.join(", "),
          instructions: data.instructions.join(", "),
        });
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...recipe,
      ingredients: recipe.ingredients.split(",").map((i) => i.trim()),
      instructions: recipe.instructions.split(",").map((i) => i.trim()),
    };
    if (id) await updateRecipe(id, payload);
    else await createRecipe(payload);
    navigate("/");
  };

  return (
    <div className="card shadow-sm p-4">
      <h3 className="mb-3">{id ? "Edit Recipe" : "Add New Recipe"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" className="form-control" value={recipe.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input name="category" className="form-control" value={recipe.category} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Cooking Time (minutes)</label>
          <input type="number" name="cookingTime" className="form-control" value={recipe.cookingTime} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredients (comma separated)</label>
          <textarea name="ingredients" className="form-control" rows="3" value={recipe.ingredients} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Instructions (comma separated)</label>
          <textarea name="instructions" className="form-control" rows="3" value={recipe.instructions} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-success me-2">
          {id ? "Update Recipe" : "Create Recipe"}
        </button>
        <button onClick={() => navigate("/")} type="button" className="btn btn-secondary">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
