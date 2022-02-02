import { renderIngredientLI } from './utils.js';


function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredientLI(item);
        ingredientList.appendChild(li);
    }
}