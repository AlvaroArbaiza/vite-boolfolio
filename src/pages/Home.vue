<script>
import Projects from './Projects.vue';

export default {
    name: "Home",
    components: {
        Projects
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

    <!-- jumbotron  -->
    <section class="jumbotron my-5 mx-5 py-5 text-dark">
        <div class="d-flex flex-column">
        
             <!-- content  -->
            <div class="content d-flex align-items-center">
                <h3 class="d-flex flex-column me-4">
                    <span>Web </span>
                    <div>
                        <span>Developer</span>
                        <i class="fa-solid fa-laptop-code ms-5"></i>
                    </div>
                </h3>
            </div>
        </div>
    </section>

    <!-- projects -->
    <Projects/>
</template>
<style lang="scss" scoped>

// jumbotron
.jumbotron {
        
        // content
        .content {
            font-size: 10rem !important;
    
            h3 {
                font-size: 10rem !important;
            }
        }
    }
</style>