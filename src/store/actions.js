import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
      .then(({ data }) => {
        commit('setSearchedMeals', data.meals)
      })
  }
  
  export function searchMealsByCategory({ commit }, category) {
    axiosClient.get(`filter.php?c=${category}`)
      .then(({ data }) => {
        commit('setMealsByCategory', data.meals)
      })
  }
  
  export function searchMealsByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
      .then(({ data }) => {
        commit('setMealsByIngredients', data.meals)
      })
  }