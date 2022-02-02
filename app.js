import { renderIngredientLI } from './utils.js';

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
        ingredient: data.get('ingredient'),
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
