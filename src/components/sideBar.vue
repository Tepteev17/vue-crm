<template>
    <div id="show-side-btn"
         :class="{active:!isActiveSidebar}"
         v-on:click="showSidebar">
        <div class="hide-sidebar"><img src="@/assets/img/show-icon-sidebar.svg" alt=""></div>
    </div>
    <div class="sidebar"
        :class="{active:isActiveSidebar}"
    >
        <div class="sidebar-content">
            <div class="logo">
                <div class="wrapper-logo-and-hide">
                    <div class="logo-icon"><img src="@/assets/img/logo-icon.svg" alt=""></div>
                    <div class="hide-sidebar in-sidebar"
                        v-on:click="showSidebar"
                    ><img src="@/assets/img/hide-icon-sidebar.svg" alt=""></div>
                </div>
                <router-link to="/profile" class="profile">
                    {{ name }}
                </router-link>
            </div>
            <ul class="sidebar-nav">
                <li class="navbar-toggle" v-for="link in links" :key='link.url'>
                    <div class="wrapper-img">
                        <img :src="require(`../assets/img/${link.pathSVG}`)">
                    </div>
                    <router-link :to="link.path" v-on:click="getCurrencyRoute">
                        {{ link.title }}
                    </router-link>

                </li>
            </ul>
        </div>
        <div class="wrapper-logout" v-on:click="logout">
            <div class="logout-link"><img src="@/assets/img/logout-icon.svg" alt="">Выйти</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                { title: 'Your charts', path: '/yourCharts', pathSVG: 'stat.svg' },
                { title: 'History', path: '/history', pathSVG: 'history.svg' },
                { title: 'Planing', path: '/planning', pathSVG: 'planning.svg' },
                { title: 'New Edit', path: '/record', pathSVG: 'edit.svg' },
                { title: 'Category', path: '/categories', pathSVG: 'category.svg' }
            ]
        }
    },
    computed: {
        name() {
            return this.$store.getters.info.name
        },
        getCurrencyRoute(){
            this.$store.commit('changeCurrentRoute',this.$route.name)
        },
        isActiveSidebar(){
            return this.$store.getters.isSidebarState
        }
    },
    methods:{
        async logout(){
            await this.$store.dispatch('logout')
            this.$router.push('/')
        },
        showSidebar(){
            this.$store.commit('showSidebar')
        }
    }
}
</script>