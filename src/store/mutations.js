
export function setSearchedMeals(state, meals) {
    state.searchedMeals = meals || []
  }
export function setMealsByCategory(state, meals) {
    state.mealsByCategory = meals || []
  }
export function setMealsByIngredients(state, meals) {
    state.mealsByIngredient = meals || []
  }
export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
  }
  export function setCategory(state, category) {
    state.category = category
  }