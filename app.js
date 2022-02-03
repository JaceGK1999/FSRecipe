import { renderIngredientLI, renderMealLI } from './utils.js';

const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');

const remove = document.getElementById('remove');

const mealName = document.getElementById('meal-name');
const save = document.getElementById('save-meal');

let ingredients = [];
let meals = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const item = {
        ingredient: data.get('Ingredient'),
        qty: data.get('qty'),
        measurement: data.get('measurement'),
        calories: Number(data.get('calories')),
    };
    ingredients.push(item);
    renderIngredients();
    form.reset();
});

remove.addEventListener('click', () => {
    ingredients.pop();
    renderIngredients();
});

save.addEventListener('click', () => {
    const name = mealName.value;
    const count = ingredients.length;
    meals.push({ name, count });
    renderMeals();
    resetIngredients();
});

function renderMeals() {
    mealList.textContent = '';
    for (let meal of meals) {
        const li = renderMealLI(meal);
        mealList.append(li);
    }
}

function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredientLI(item);
        ingredientList.appendChild(li);
    }
}

function resetIngredients() {
    ingredients = [];
    ingredientList.textContent = '';
}
