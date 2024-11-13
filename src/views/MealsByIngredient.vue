<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals with Ingredient {{ ingredientName }}</h1>
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from '../components/Meals.vue'

const route = useRoute();
const ingredientName =computed(() => route.params.ingredient || '');
const meals = computed(() => store.state.mealsByIngredient)

onMounted(() => {
  if (ingredientName.value) {
    store.dispatch("searchMealsByIngredient", ingredientName.value);
  }
});

</script>