<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Categories</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link 
        :to="{ name: 'byCategory', params: { category: category.strCategory } }"
        v-for="category of categories" 
        :key="category.strCategory" 
        class="block bg-white rounded p-3 shadow transition-all hover:scale-105">
        <h3 class="text-2xl text-center font-bold mb-2">{{ category.strCategory }}</h3>
      </router-link>
    </div>
  </div>
</template>


<script setup>
  import { computed } from "@vue/reactivity";
  import { onMounted, ref } from "vue";
  import store from "../store";
  import Meals from '../components/Meals.vue'
  import axiosClient from "../axiosClient";

 
  const meals = computed(() => store.state.mealsByCategory)

  const categories = ref([])

  onMounted(() => {
    axiosClient.get('list.php?c=list')
    .then(({data}) =>{
        categories.value = data.meals;
    })
  })

  
</script>