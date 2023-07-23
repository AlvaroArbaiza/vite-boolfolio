<script>
import axios from 'axios';

export default {
    name: "ContactComp",
    components: {
    },
    data() {
        return {
            pathBase: 'http://127.0.0.1:8000/',
            name: '',
            email: '',
            message: '',
            success: false
        };
    },
    mounted() {
    },
    created() {
    },
    computed: {
    },
    methods: {
        sendForm() {

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }      
            
            
                axios.post(`${this.pathBase}api/contacts`, data ).then( response => {

                    this.success = response.data.success;
                    if(this.success) {
                        this.name = '',
                        this.email = '',
                        this.message = ''
                    }
                });
                
        }
    }
}
</script>

<template>
    <h3>Contattami</h3>

    <div class="container">
        <form action="" @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="" class="form-label">Nome</label>
                <input type="text" class="form-control" id="" placeholder="Nome" name="name" v-model="name">
            </div>

            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" class="form-control" id="" placeholder="name@example.com" name="email" v-model="email">
            </div>

            <div class="mb-3">
                <div class="mb-3">
                    <label for="" class="form-label">Messaggio</label>
                    <textarea class="form-control" id="" rows="3" name="message" v-model="message"></textarea>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">
                Invia
            </button>

        </form>
    </div>
  
</template>
<style lang="scss" scoped>


</style>