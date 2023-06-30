import { createRouter, createWebHistory } from 'vue-router';
import Projects from './pages/Projects.vue';
import ProjectSingle from './pages/ProjectSingle.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        // Tutte le richieste di route che non corrispondono ad altre definizioni di route verranno reindirizzate al path "/"
        {
            path: '/:pathMatch(.*)*',
            redirect: '/not-found'
        },        
        // Home page
        { 
            path: '/', 
            component: Home,
            name: 'Home'
        },
        // Projects
        { 
            path: '/projects', 
            component: Projects,
            name: 'Projects'
        },
        // Project
        { 
            path: '/projects/:slug', 
            component: ProjectSingle,
            name: 'Project'
        },
        // NotFound
        { 
            path: '/not-found', 
            component: NotFound,
            name: 'Not-found'
        }
    ]
});

export { router };