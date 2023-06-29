<script>
import HeaderComp from './components/HeaderComp.vue';

export default {
    name: "App",
    components: {
        HeaderComp
    },
    data() {
        return {
        };
    },
    computed: {
    },
    methods: {
    }
}
</script>

<template>
    <header>
        <HeaderComp>

        </HeaderComp>
    </header>

    <!-- main -->
    <main>
        <!--
            ** ROUTER-VIEW **: Viene utilizzato per visualizzare il componente corretto in base alla rotta attuale
            ** V-SLOT **: Viene utilizzata per definire uno slot in <router-view>. In questo caso, con l'oggetto destrutturato {Component, route}, avremo accesso alle proprietà Component e route all'interno dello slot 
            ** TRANSITION **: Componente utilizzata per ottenere un effetto di transizione al componente che si trova dentro ROUTER-VIEW, la tranzizione poi dovrà essere definita con css o scss
            ** COMPONENT **:  L'attributo :key="route.path" viene utilizzato per garantire la corretta distruzione e ricreazione del componente quando la rotta cambia, mentre l'attributo :is="Component" assegna dinamicamente il componente corretto in base alla rotta attuale
        -->
        <router-view v-slot="{Component}">
            <Transition name="fade" >
                <component :is="Component"/>
            </Transition>
        </router-view>
    </main> 
</template>

<style lang="scss">
@use './style/main.scss';

//****  transition route  ****/
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;

}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
//**** end transition route  ****/
</style>
