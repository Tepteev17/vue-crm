<template>
    <nav class="navbar"
        :class="{ 'filter-blur': this.$store.getters.isBlurEffect }">
        <div class="nav-wrapper">
            <div class="title-header">
                {{ currentRoute}}
            </div>
            <div class="wrapper-comunication-header">
                <div class="btn-new-note" v-on:click="showModal">
                    <button class="btn-blue base-btn">
                        <img src="@/assets/img/add-icon.svg" alt="">New note
                    </button>
                </div>
                <div id="notifications"><img src="@/assets/img/notifications-icon.svg" alt=""></div>
                <div class="hamburger-slim"
                     v-on:click="showSidebar"></div>
            </div>
        </div>
        <div class="search-wrapper bg-band-gray">
            <div class="search-input-wrapper">
                <img src="@/assets/img/search-icon.svg" alt="">
                <div class="search-input">
                    <input type="text" name="" id="" :placeholder="routeParams[this.$store.getters.currencyRoute]">
                </div>
            </div>
            <div class="filters-wrapper"></div>
        </div>
    </nav>
</template>
<script>
export default{
    data(){
        return{
            routeParams:{
                'New Edit': 'Serch edit',
                'Planning': 'Serch plan',
            }
        }
    },
    mounted(){
    },
    computed:{
        currentRoute() {
            return this.$store.getters.currencyRoute
        },
    },
    methods:{
        showModal(){
            this.$store.commit('showModal')
        },
        showSidebar(){
            this.$store.commit('showSidebar')
        }
    }
}
</script>