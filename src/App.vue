<script >
import axios from 'axios';

export default {
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
    <div class="container my-5">
        <div class="row text-center">
            <div class="col">
                <h1>My Projects</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row row-gap-5">
            <div class="col-6" v-for="(element, index) in projects" :key="index">

                <div class="card">
                    
                    <img class="img-fluid" :src="`${pathBase}storage/${element.image}`" :alt="element.title">
                    
                    <!-- Card Body -->
                    <div class="card-body">                
                        
                        <!-- Titolo -->
                        <h5>
                            <span class="opacity-75">Titolo: </span>
                            <span class="opacity-100 text-uppercase">{{ element.title }}</span>                    
                        </h5>
                        
                        <!-- Technologies -->
                        <h6 class="mb-2">
                            <span class="opacity-75">Linguaggio usato: </span>
                            <span v-if="element.technology" class="badge rounded-pill text-bg-success mx-1" v-for="(elem,ind) in element.technology">{{ elem.name }}</span>  
                        </h6>

                        <!-- Customer -->
                        <h6 class="mb-2">
                            <span class="opacity-75">Cliente: </span>
                            <span class="opacity-100 text-uppercase">{{ element.customer }}</span>  
                        </h6>

                        <!-- Tipologia -->
                        <h6 class="mb-2">
                            <span class="opacity-75">Tipologia: </span>
                            <span class="opacity-100 text-uppercase">{{ element.type.name }}</span>  
                        </h6>

                        <!-- Settore -->
                        <h6 class="mb-2">
                            <span class="opacity-75">Settore: </span>
                            <span class="opacity-100 text-uppercase">{{ element.type_customer }}</span>  
                        </h6>

                        <!-- Price -->
                        <h6 class="mb-2">
                            <span class="opacity-75">Prezzo: </span>
                            <span class="opacity-100 text-uppercase">€{{ element.price }}</span>  
                        </h6>

                        <!-- Created -->
                        <h6 class="mb-2">
                            <span class="opacity-75">Data: </span>
                            <span class="opacity-100 text-uppercase">{{ element.created }}</span>  
                        </h6>


                        <!-- Voto -->
                        <!-- <div class="d-flex align-items-center mb-1">
                            <h6 class="m-0 me-2 h-100">Voto:</h6>
                            <div>
                                <i v-for=" elem in 5" class="text-warning fa-star" :class=" elem <= voteStars(vote) ? `fa-solid` : `fa-regular` "></i>
                            </div>
                        </div>      -->

                        <!-- Descrizione -->
                        <p>{{ element.description }}</p>           
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
