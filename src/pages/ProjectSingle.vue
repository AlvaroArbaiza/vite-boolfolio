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
            
            try {
                const response = await axios.get(`${this.pathBase}api/projects/${this.$route.params.slug}`);
                
                this.project = response.data.project;
                
            } catch (error) {
                
                // se lo status è 404 redirect alla pagina 404(Not Found)
                if(error.response.status === 404){

                    // rimandiamo a una altra pagina usando 'this.$router.push'
                    this.$router.push( { name: 'not-found' } )
                }
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