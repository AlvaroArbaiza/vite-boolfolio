<script >
import axios from 'axios';
import MainComp from './components/MainComp.vue';

export default {
    name: "App",
    components: {
        MainComp
    },
    data() {
        return {
        };
    },
    mounted() {
        // this.getProjects();
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
    <div class="container my-5">
        <div class="row text-center">
            <div class="col">
                <h1>My Projects</h1>
            </div>
        </div>
    </div>

    <main>
        <MainComp/>
    </main>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
