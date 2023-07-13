<template>
    <div class="app-main-layout">
        <main class="app-content">
            <sideBar/>
            <div class="app-page">
                <navBar/>
                <router-view />
            </div>
            <modalNewNote/>
        </main>
    </div>
</template>
<script>
import navBar from '../components/navBar.vue'
import sideBar from '../components/sideBar.vue'
import modalNewNote from '../components/modalNewNote.vue'
export default {
    name:'main-layout',
    components:{
        navBar,sideBar,modalNewNote
    },
    async mounted(){
        if (!Object.keys(this.$store.getters.info).length){
           await this.$store.dispatch('fetchInfo')
        }
    }
}
</script>