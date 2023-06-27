<template>
    <div class="app-main-layout">
        <navBar/>
        <main class="app-content">
            <sideBar/>
            <div class="app-page">
                <router-view />
            </div>
        </main>
    </div>
</template>
<script>
import navBar from '../components/navBar.vue'
import sideBar from '../components/sideBar.vue'
export default {
    name:'main-layout',
    components:{
        navBar,sideBar
    }
}
</script>

<style></style>