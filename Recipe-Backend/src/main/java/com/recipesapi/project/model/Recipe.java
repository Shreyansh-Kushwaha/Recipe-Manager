package com.recipesapi.project.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "recipes")//Store instances of this class in the recipes collection in MongoDB.
public class Recipe {

    @Id//pk of the recipe in mongodb
    private String id;
    private String title;
    private List<String> ingredients;
    private List<String> instructions;
    private int cookingTime;
    private String category;


    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public List<String> getIngredients() { return ingredients; }
    public void setIngredients(List<String> ingredients) { this.ingredients = ingredients; }

    public List<String> getInstructions() { return instructions; }
    public void setInstructions(List<String> instructions) { this.instructions = instructions; }

    public int getCookingTime() { return cookingTime; }
    public void setCookingTime(int cookingTime) { this.cookingTime = cookingTime; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
}

