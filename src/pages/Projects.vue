<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

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
            selectType:'all'
        };
    },
    mounted() {
        this.getProjects(1);
        this.getTypes();
    },
    created() {
    },
    computed: {
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
        }
    }
}
</script>

<template>
    <div class="container mt-5">

        <!-- select types -->
        <div class="row mb-5">
            <div class="col-3">
                <label for="types" class="form-label">Tipologia</label>
                <select v-model="selectType" class="form-select" id="types" @change="getProjects()">
                    <option value="all" selected>--- All ---</option>
                    <option 
                        v-for="(element, index) in types" :key="index"
                        :value="element.id"    
                    >
                    {{ element.name }}
                    </option>
                </select>
            </div>
        </div>

        <!-- projects -->
        <div class="row row-gap-5">
            <div class="col-6" v-for="(element, index) in projects" :key="index">

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
        <div class="row mt-5">
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
    </div>
</template>

<style>
</style>