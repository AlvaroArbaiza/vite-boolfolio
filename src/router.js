import { createRouter, createWebHistory } from 'vue-router';
import Projects from './pages/Projects.vue';
import Home from './pages/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        // Tutte le richieste di route che non corrispondono ad altre definizioni di route verranno reindirizzate al path "/"
        // {
        //     path: '/:pathMatch(.*)*',
        //     redirect: '/'
        // },
        
        // Home page
        { 
            path: '/', 
            component: Home,
            name: 'Home'
        },
        // Projects - Projects
        { 
            path: '/projects', 
            component: Projects,
            name: 'Projects'
        },


        // FilmComp - Film
        // { 
        //     path: '/Film', 
        //     component: FilmComp,
        //     name: 'Film'
        // },

        // SearchResultsComp - SearchResults
        // { 
        //     path: '/Search', 
        //     name: 'search-results',
        //     component: SearchResultsComp
        // }
    ]
});

export { router };