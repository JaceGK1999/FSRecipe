import { renderIngredientLI } from './utils.js';


const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-list');
const mealList = document.getElementById('meal-list');

const remove = document.getElementById('remove');

const mealName = document.getElementById('meal-name');
const save = document.getElementById('save-meal');

let ingredients = [];
let meals = [];