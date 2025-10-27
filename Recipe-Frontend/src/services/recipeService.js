import axios from "axios";

const API_URL = "http://localhost:8080/recipes"; // Spring Boot backend URL

export const getAllRecipes = () => axios.get(API_URL);
export const getRecipeById = (id) => axios.get(`${API_URL}/${id}`);
export const createRecipe = (recipe) => axios.post(API_URL, recipe);
export const updateRecipe = (id, recipe) => axios.put(`${API_URL}/${id}`, recipe);
export const deleteRecipe = (id) => axios.delete(`${API_URL}/${id}`);
