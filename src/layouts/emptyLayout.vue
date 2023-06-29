<template>
    <div class="empty-layout">
        <router-view></router-view>
        <div class="error-massage"
             :class="{active:isActiveError}"
            >
            <p class="error-text" >{{errorText}}</p>
            <div class="btn-close" v-on:click='isActiveError = false'>
                <img src="../assets/img/close.svg">
            </div>
        </div>
    </div>
</template>
<script>
import messages from '@/utils/messages'
export default{
    data(){
        return{
            isActiveError:false,
            errorText:''
        }
    },
    computed:{
        error(){
            return this.$store.getters.error
        }
    },
    watch:{
        error(fbError){
            this.errorText = messages[fbError.code] || 'Что-то пошло не так!'
            if (fbError){
                this.isActiveError = true
            }
        },
    }
}
</script>