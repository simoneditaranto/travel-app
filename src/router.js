import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import CreateTravel from './pages/CreateTravel.vue';
import TravelsList from './pages/TravelsList.vue';
import TravelsToDo from './pages/TravelsToDo.vue';

const router = createRouter({

    history: createWebHistory(),

    routes: [

        {
            path: '/',
            name: 'home',
            component: HomePage,
        },

        {
            path: '/create-travel',
            name: 'create-travel',
            component: CreateTravel,
        },

        {
            path: '/travels-list',
            name: 'travels-list',
            component: TravelsList,
        },

        {
            path: '/travels-to-do',
            name: 'travels-to-do',
            component: TravelsToDo,
        },

    ],

});

export { router };