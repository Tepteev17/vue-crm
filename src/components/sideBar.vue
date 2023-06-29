<template>
    <div class="sidebar">
            <ul class="sidebar-nav">
                <router-link
                    v-for="link in links"
                    :key='link.url'          
                    custom 
                    :to="link.path"
                    v-slot="{ href, navigate}"
                >
                    <li id="navbar-toggle" >
                        <a id="navbar-toggle" :href="href" @click="navigate">{{link.title}}<i class="fa fa-bars menu-icon fa-2x" aria-hidden="true"></i></a>
                    </li>
                </router-link>

            </ul>
        </div>
</template>
<script>
export default{
    data(){
        return{
            links:[
                {title:'Cash acc',path:'/cashAcc',},
                {title:'History',path:'/history',},
                {title:'Planing',path:'/planning',},
                {title:'New Edit',path:'/record',},
                {title:'Category',path:'/',}
            ]
        }
    }
}
</script>