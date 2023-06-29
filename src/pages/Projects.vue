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
            projects: []
        };
    },
    mounted() {
        this.getProjects(1);
    },
    created() {
    },
    computed: {
    },
    methods: {
        // chiamata api backend con axios
        async getProjects(pageFirst) {
            
            const response = await axios.get(`${this.pathBase}api/projects`, {
                params: {
                    page: pageFirst
                }
            });

            console.log(response.data.projects)
            this.projects = response.data.projects.data;
            this.currentPage = response.data.projects.current_page;
            this.lastPage = response.data.projects.last_page;
        }
    }
}
</script>

<template>
    <div class="container">
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