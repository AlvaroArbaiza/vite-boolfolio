<script>
import { useRoute } from 'vue-router';

export default {
    name: 'ProjectCard',
    props: {
        title: String,
        pathBase: String,
        image: String,
        technology: Array,
        customer: String,
        type: Object,
        type_customer: String,
        price: String,
        created: String,
        description: String,
        projectSlug: String
    },
    data() {
        return {
        };
    },
    setup() {
        const route = useRoute();        
        // Verifica se la route corrente è la pagina Projects
        const isHomePage = route.path === '/';
        
        // se la pagina corrente sarà Projects, isProjectsPage = 'true', else 'false'
        return {
            isHomePage
        };
    },
    mounted() {
    },
    created() {
    },
    computed: {
    },
    methods: {
    }
}
</script>

<template>

<div class="card border-0 position-relative">
                    
    <router-link class="nav-link" :to="{name: 'Project', params: { slug: projectSlug } }">                     
        <img class="img-fluid" :src="`${pathBase}storage/${image}`" :alt="title">
    </router-link > 
    
    <!-- title on hover -->
    <div v-if="isHomePage" class="project-title ps-3">
        <h4>{{ title }}</h4>
    </div>            
    
    <!-- Card Body -->
    <div v-if="!isHomePage" class="card-body">
        
        <!-- Titolo -->
        <h5>
            <span class="opacity-75">Titolo: </span>
            <span class="opacity-100 text-uppercase">{{ title }}</span>                    
        </h5>
        
        <!-- Technologies -->
        <h6 v-if="technology" class="mb-2">
            <span class="opacity-75">Linguaggio usato: </span>
            <span class="badge rounded-pill text-bg-success mx-1" v-for="(elem,index) in technology" :key="index">{{ elem.name }}</span>  
        </h6>

        <!-- Customer -->
        <h6 class="mb-2">
            <span class="opacity-75">Cliente: </span>
            <span class="opacity-100 text-uppercase">{{ customer }}</span>  
        </h6>

        <!-- Tipologia -->
        <h6 v-if="type" class="mb-2">
            <span class="opacity-75">Tipologia: </span>
            <span class="opacity-100 text-uppercase">{{ type.name }}</span>  
        </h6>

        <!-- Settore -->
        <h6 class="mb-2">
            <span class="opacity-75">Settore: </span>
            <span class="opacity-100 text-uppercase">{{ type_customer }}</span>  
        </h6>

        <!-- Price -->
        <h6 class="mb-2">
            <span class="opacity-75">Prezzo: </span>
            <span class="opacity-100 text-uppercase">€{{ price }}</span>  
        </h6>

        <!-- Created -->
        <h6 class="mb-2">
            <span class="opacity-75">Data: </span>
            <span class="opacity-100 text-uppercase">{{ created }}</span>  
        </h6>

        <!-- Descrizione -->
        <p>{{ description }}</p>           
    </div>
</div>

</template>

<style lang="scss">
@use '../style/main.scss';

.card {

    .project-title {
        height: 0;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        color: #ffffff;
        background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8) 55% 97%, transparent 98%);
        transition: 0.5s;

        h4 {            
            font-size: 0;    
        }
    }

    &:hover .project-title {
        height: 2.5rem;
    }

    &:hover .project-title h4 {
        font-size: 1.5rem;
    }
}

</style>