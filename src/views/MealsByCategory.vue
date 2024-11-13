<template>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ categoryName }}</h1>
    </div>
  
    <Meals :meals="meals" />
  </template>
  
  <script setup>
  import { computed } from "@vue/reactivity";
  import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";
  import store from "../store";
  import Meals from '../components/Meals.vue';

  const route = useRoute();
 
  const meals = computed(() => store.state.mealsByCategory)
  const categoryName = computed(() => route.params.category || '');

  onMounted(() => {
    if (categoryName.value) {
      store.dispatch("searchMealsByCategory", categoryName.value);
    }
  });


  
  </script>