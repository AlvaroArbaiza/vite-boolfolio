<script>
export default {
    name: "HeaderComp",
    components: {
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
<nav class="navbar navbar-expand-md mx-5 py-4 d-block">
    <div class="d-flex justify-content-between">

        <!-- TITLE - name  -->
        <a class="d-flex align-items-center text-decoration-none text-black" href="/">
            <h3 class="text-uppercase">alvaro arbaiza</h3>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
        </button>

         <!-- NAVBAR  -->
        <div class="collapse navbar-collapse flex-grow-0 pe-2" id="navbarSupportedContent">

            <!-- lists -->
            <ul class="navbar-nav ml-auto fs-4">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Home'}">
                        <span>
                            Home
                        </span>                         
                    </router-link > 
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Projects'}">
                        <span>
                            Projects
                        </span>                         
                    </router-link > 
                </li>
            </ul>
        </div>
    </div>
</nav>
  
</template>
<style lang="scss" scoped>


</style>