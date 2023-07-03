<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { useRoute } from 'vue-router';

export default {
    name: "Projects",
    components: {
        ProjectCard
    },
    data() {
        return {
            pathBase: 'http://127.0.0.1:8000/',
            currentPage: null,
            lastPage: null,
            projects: [],
            types: [],
            technologies: [],
            selectType:'all',
            selectedTechs: []
        };
    },
    setup() {
        const route = useRoute();        
        // Verifica se la route corrente è la pagina Projects
        const isProjectsPage = route.path === '/projects';
        
        // se la pagina corrente sarà Projects, isProjectsPage = 'true', else 'false'
        return {
            isProjectsPage
        };
    },
    mounted() {
        this.getProjects(1);
        this.getTypes();
        this.getTechnologies();
    },
    watch: {
        // Il metodo 'watch' indica a Vue di osservare le modifiche alla proprietà "selectedTechs" e di richiamare la funzione "getProjects" quando si verifica una modifica
        selectedTechs: {
            handler: 'getProjects',
            deep: true
        }
    },
    created() {
    },
    computed: {
        cachedProjects() {
            return this.projects;
        },
        cachedTypes() {
            return this.types;
        },
        cachedTechnologies() {
            return this.technologies;
        }
    },
    methods: {
        // chiamata api backend con axios per la tabella projects
        async getProjects(pageFirst) {

            const params = {
                page: pageFirst
            }

            if ( this.selectType !== 'all') {
                params.type_id = this.selectType
            }

            if ( this.selectedTechs > 0 ) {
                params.technology_id = this.selectedTechs.join(',')
            }
            
            try {
                const response = await axios.get(`${this.pathBase}api/projects`, { params } );
    
                console.log(response.data.projects)
                this.projects = response.data.projects.data;
                this.currentPage = response.data.projects.current_page;
                this.lastPage = response.data.projects.last_page;

            } catch(error) {
                console.log(error);
            }
        },

        // chiamata api backend con axios per la tabella types
        async getTypes() {
            
            try {
                const response = await axios.get(`${this.pathBase}api/types`);
                
                this.types = response.data.types;
                
            } catch (error) {
                console.log(error);
            }
        },

        // chiamata api backend con axios per la tabella technologies
        async getTechnologies() {

            try {
                const response = await axios.get(`${this.pathBase}api/technologies`);

                this.technologies = response.data.technologies;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<template>
    <section class="mx-5 py-5">
        <div class="mb-5 d-flex align-items-center">
            <h2 class="fw-bold text-dark fs-1">Projects</h2>
            <hr class="ms-3 w-100 border-top border-dark opacity-100">
        </div>
    
        <div v-if="isProjectsPage" class="row column-gap-5">
        
            <!-- select types -->
            <div class="col-2 mb-5">
                <label for="types" class="form-label fw-semibold">Tipologia</label>
                <select v-model="selectType" class="form-select" id="types" @change="getProjects()">
                    <option value="all" selected>--- All ---</option>
                    <option 
                        v-for="(element, index) in cachedTypes" :key="index"
                        :value="element.id"    
                    >
                    {{ element.name }}
                    </option>
                </select>
            </div>

            <!-- checkbox technologies -->
            <div class="col-3 mb-5">
                <h6 class="fw-semibold">Linguaggio</h6>
                <div class="d-flex flex-wrap column-gap-4 row-gap-1">
                    <div class="form-check" 
                        v-for="(element, index) in cachedTechnologies" :key="index"
                    >
                        <input class="form-check-input" type="checkbox" :value="element.id" :id="element.name" v-model="selectedTechs">
                        <label class="form-check-label" :for="element.name">
                            {{ element.name }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <!-- projects -->
        <div class="row row-gap-5">
            <div class="col-6" v-for="(element, index) in cachedProjects" :key="index">
    
                <ProjectCard
                    :title="element.title"
                    :pathBase="pathBase"
                    :image="element.image"
                    :technology="element.technology"
                    :customer="element.customer"
                    :type="element.type"
                    :type_customer="element.type_customer"
                    :price="element.price"
                    :created="element.created"
                    :description="element.description"
                    :projectSlug="element.slug"
                >
                </ProjectCard>
            </div>
        </div>
    
        <!-- navigation -->
        <div v-if="isProjectsPage" class="row mt-5">
            <nav>
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" @click.prevent="getProjects(currentPage - 1)">
                            Previous
                        </a>
                    </li>
                    <li class="page-item" :class="elem === currentPage ? 'active' : '' " v-for="(elem,index) in lastPage" :key="index">
                        <a class="page-link" href="#" @click.prevent="getProjects(elem)">
                            {{ elem }}
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" @click.prevent="getProjects(currentPage + 1)">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<style>
</style>