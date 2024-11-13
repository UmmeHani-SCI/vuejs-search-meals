<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>

    <router-link 
    :to="{
      name :'byIngredient', 
      params: { ingredient: ingredient.strIngredient},
      }" 
      v-for="ingredient of ingredients" 
        :key="ingredient.idIngredient" 
      class="block bg-white rounded p-3 mb-3 shadow" >
        <h3 class="text-2xl font-bold mb-2">{{ingredient.strIngredient }}</h3>
        <p>{{ingredient.strDescription}}</p>
      </router-link>
   

  </div>

  
</template>

<script setup>
  import { computed } from "@vue/reactivity";
  import { onMounted, ref } from "vue";
  import store from "../store";
  import Meals from '../components/Meals.vue'
  import axiosClient from "../axiosClient";

 
  const meals = computed(() => store.state.mealsByIngredient)

  const ingredients = ref([])

  onMounted(() => {
    axiosClient.get('list.php?i=list')
    .then(({data}) =>{
        ingredients.value = data.meals;
    })
  })
</script>