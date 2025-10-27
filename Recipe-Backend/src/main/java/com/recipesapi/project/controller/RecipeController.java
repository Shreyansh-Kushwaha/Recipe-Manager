package com.recipesapi.project.controller;

import com.recipesapi.project.model.Recipe;
import com.recipesapi.project.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/recipes")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe)
    {
        return recipeRepository.save(recipe);
    }

    @GetMapping
    public List<Recipe> getAllRecipes()
    {
        return recipeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable String id)
    {
        return recipeRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Recipe updateRecipe(@PathVariable String id, @RequestBody Recipe updatedRecipe)
    {
        Optional<Recipe> existing = recipeRepository.findById(id);
        if (existing.isPresent()) {
            Recipe recipe = existing.get();
            recipe.setTitle(updatedRecipe.getTitle());
            recipe.setIngredients(updatedRecipe.getIngredients());
            recipe.setInstructions(updatedRecipe.getInstructions());
            recipe.setCookingTime(updatedRecipe.getCookingTime());
            recipe.setCategory(updatedRecipe.getCategory());
            return recipeRepository.save(recipe);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable String id) {
        recipeRepository.deleteById(id);
    }
}


