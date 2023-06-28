<script>
import axios from 'axios';
import ProjectCardComp from './ProjectCardComp.vue';

export default {
    name: "MainComp",
    components: {
        ProjectCardComp
    },
    data() {
        return {
            pathBase: 'http://127.0.0.1:8000/',
            projects: []
        };
    },
    mounted() {
        this.getProjects();
    },
    created() {
    },
    computed: {
    },
    methods: {
        // chiamata api backend con axios
        async getProjects() {
            
            const response = await axios.get(`${this.pathBase}api/projects`);

            console.log(response.data.projects)
            this.projects = response.data.projects
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-gap-5">
            <div class="col-6" v-for="(element, index) in projects" :key="index">

                <ProjectCardComp
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
                >

                </ProjectCardComp>
            </div>
        </div>
    </div>

</template>

<style>
</style>