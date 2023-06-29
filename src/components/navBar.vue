<template>
    <nav class="navbar">
        <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
        </label>
        <ul>
            <li><a href="#TIME" class="active">{{ date}}</a></li>
            <li><a href="#DATE">{{dateDay}}</a></li>

        </ul>
        <div class="logo">
            <router-link
            to="/profile"
            class="profile">
               Profile
            </router-link>
            <div class="wrapper-logout"
                    v-on:click="logout"><i class="gg-log-out"></i></div>
            
            
    </div>
    </nav>
</template>
<script>
export default{
    data(){
        return{
            date:new Date().toLocaleTimeString(),
            interval:null,
            dateDay:new Date().toLocaleDateString()
        }
    },
    computed:{

    },
    mounted(){
        this.interval = setInterval(() =>{
            let date = new Date()
            this.date = date.toLocaleTimeString()
        },1000)
    },
    beforeDestroy(){
        clearInterval(this.interval)
    },
    methods:{
        async logout(){
            await this.$store.dispatch('logout')
            this.$router.push('/login')
        }
    }
}
</script>