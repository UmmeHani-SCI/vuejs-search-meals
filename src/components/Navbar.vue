<template>
     <header class="bg-white shadow h-16 flex justify-between  px-4">
            <router-link :to="{name: 'home'}" class="inline-flex items-center px-5 h-full">
                Home
            </router-link>
            <div class="flex items-center gap-1 ">
                <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                    Search Meals
                </router-link>
                <router-link :to="{name: 'categories'}"  class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                    Meals By Categories
                </router-link>
                <router-link :to="{name: 'ingredients'}"  class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                    Meals By Ingredients
                </router-link>
            </div>

        </header>
</template>