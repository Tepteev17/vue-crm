<template>
    <div class="app-main-layout">
        <main class="app-content">
            <sideBar/>
            <div class="app-page">
                <navBar/>
                <router-view />
            </div>
            <modalNewNote/>
            <modalNoteItem/>
        </main>
    </div>
</template>
<script>
import navBar from '../components/navBar.vue'
import sideBar from '../components/sideBar.vue'
import modalNewNote from '../components/modalCreateNote.vue'
import modalNoteItem from '@/components/modalNoteItem.vue'
export default {
    name:'main-layout',
    components:{
        navBar,sideBar,modalNewNote,modalNoteItem
    },
    async mounted(){
        if (!Object.keys(this.$store.getters.info).length){
           await this.$store.dispatch('fetchInfo')
        }
    }
}
</script>