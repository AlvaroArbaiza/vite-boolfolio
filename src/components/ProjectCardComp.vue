<script>
export default {
    name: 'ProjectCardComp',
    props: {
        title: String,
        pathBase: String,
        image: String,
        technology: Array,
        customer: String,
        type: String,
        type_customer: String,
        price: Number,
        created: String,
        description: String
    },
    data() {
        return {
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

<div class="card">
                    
    <img class="img-fluid" :src="`${pathBase}storage/${image}`" :alt="title">
    
    <!-- Card Body -->
    <div class="card-body">                
        
        <!-- Titolo -->
        <h5>
            <span class="opacity-75">Titolo: </span>
            <span class="opacity-100 text-uppercase">{{ title }}</span>                    
        </h5>
        
        <!-- Technologies -->
        <h6 class="mb-2">
            <span class="opacity-75">Linguaggio usato: </span>
            <span v-if="technology" class="badge rounded-pill text-bg-success mx-1" v-for="(elem,index) in technology" :key="index">{{ elem.name }}</span>  
        </h6>

        <!-- Customer -->
        <h6 class="mb-2">
            <span class="opacity-75">Cliente: </span>
            <span class="opacity-100 text-uppercase">{{ customer }}</span>  
        </h6>

        <!-- Tipologia -->
        <h6 class="mb-2">
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

<style>
</style>