export function renderIngredientLI(item) {
    const li = document.createElement('li');
    li.textContent = `${item.qty} ${item.measurement} of ${item.ingredient} (${item.calories} Calories)`;
    return li;
}