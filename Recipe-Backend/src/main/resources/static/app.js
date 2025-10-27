const API_URL = '/recipes';

function loadRecipes() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('recipe-list');
            list.innerHTML = '';
            data.forEach(recipe => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
          <h2>${recipe.title}</h2>
          <p><strong>Category:</strong> ${recipe.category}</p>
          <p><strong>Cooking Time:</strong> ${recipe.cookingTime} min</p>
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions.join(', ')}</p>
          <button onclick="deleteRecipe('${recipe.id}')">Delete</button>
        `;
                list.appendChild(card);
            });
        });
}

function deleteRecipe(id) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        .then(() => loadRecipes());
}

loadRecipes();
