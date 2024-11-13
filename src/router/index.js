import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByCategory from '../views/MealsByCategory.vue'
import MealsByName from '../views/MealsByName.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
import Categories from "../views/Categories.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-category/:category",
        name: "byCategory",
        component: MealsByCategory,
      },
      {
        path: "/categories",
        name: "categories",
        component: Categories,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;