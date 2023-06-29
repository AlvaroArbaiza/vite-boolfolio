<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "ProjectSingle",
    components: {
        ProjectCard
    },
    data() {
        return {
            pathBase: 'http://127.0.0.1:8000/',
            project: ''
        };
    },
    mounted() {
        this.getProject();
    },
    created() {
    },
    computed: {
    },
    methods: {
        async getProject() {
            
            const response = await axios.get(`${this.pathBase}api/projects/${this.$route.params.slug}`);
            
            if (response.data.success) {
                console.log(response.data.project)
                this.project = response.data.project;
            } else {
                // redirect alla pagina 404
                this.$router.push({ name: 'not-found' })
            }
            
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-gap-5">
            <div class="col-12">

                <ProjectCard
                    :title="project.title"
                    :pathBase="pathBase"
                    :image="project.image"
                    :technology="project.technology"
                    :customer="project.customer"
                    :type="project.type"
                    :type_customer="project.type_customer"
                    :price="project.price"
                    :created="project.created"
                    :description="project.description"
                >
                </ProjectCard>
            </div>
        </div>
    </div>
</template>

<style>
</style>