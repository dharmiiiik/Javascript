document.getElementById('recipe-form').addEventListener('submit', addRecipe);

function addRecipe(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const cuisine = document.getElementById('cuisine').value;

    if (!title || !ingredients) {
        alert("Title and ingredients are required!");
        return;
    }

    const recipe = {
        id: new Date().getTime(),
        title,
        ingredients,
        instructions,
        cuisine
    };

    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    clearForm();
    displayRecipes();
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';
    document.getElementById('cuisine').value = '';
}

function displayRecipes() {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';
    
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        
        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <p><strong>Cuisine Type:</strong> ${recipe.cuisine}</p>
            <button onclick="editRecipe(${recipe.id})">Edit</button>
            <button onclick="deleteRecipe(${recipe.id})">Delete</button>
        `;

        recipesContainer.appendChild(recipeDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayRecipes);

function editRecipe(id) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeToEdit = recipes.find(recipe => recipe.id === id);

    document.getElementById('title').value = recipeToEdit.title;
    document.getElementById('ingredients').value = recipeToEdit.ingredients;
    document.getElementById('instructions').value = recipeToEdit.instructions;
    document.getElementById('cuisine').value = recipeToEdit.cuisine;

    document.getElementById('recipe-form').removeEventListener('submit', addRecipe);
    document.getElementById('recipe-form').addEventListener('submit', function (e) {
        e.preventDefault();
        updateRecipe(id);
    });
}

function updateRecipe(id) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const index = recipes.findIndex(recipe => recipe.id === id);
    
    recipes[index] = {
        id,
        title: document.getElementById('title').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value,
        cuisine: document.getElementById('cuisine').value
    };

    localStorage.setItem('recipes', JSON.stringify(recipes));
    clearForm();
    displayRecipes();
    document.getElementById('recipe-form').removeEventListener('submit', updateRecipe);
    document.getElementById('recipe-form').addEventListener('submit', addRecipe);
}

function deleteRecipe(id) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes = recipes.filter(recipe => recipe.id !== id);

    localStorage.setItem('recipes', JSON.stringify(recipes));
    displayRecipes();
}

document.getElementById('search').addEventListener('input', displayRecipes);
document.getElementById('filter-cuisine').addEventListener('change', displayRecipes);

function displayRecipes() {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    const searchQuery = document.getElementById('search').value.toLowerCase();
    const cuisineFilter = document.getElementById('filter-cuisine').value;

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery) || recipe.ingredients.toLowerCase().includes(searchQuery);
        const matchesCuisine = !cuisineFilter || recipe.cuisine === cuisineFilter;
        return matchesSearch && matchesCuisine;
    });

    filteredRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        
        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <p><strong>Cuisine Type:</strong> ${recipe.cuisine}</p>
            <button onclick="editRecipe(${recipe.id})">Edit</button>
            <button onclick="deleteRecipe(${recipe.id})">Delete</button>
        `;

        recipesContainer.appendChild(recipeDiv);
    });
}



