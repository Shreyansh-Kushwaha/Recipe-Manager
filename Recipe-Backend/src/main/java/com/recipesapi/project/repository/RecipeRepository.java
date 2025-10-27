package com.recipesapi.project.repository;

import com.recipesapi.project.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipeRepository extends MongoRepository<Recipe,String> {
}

