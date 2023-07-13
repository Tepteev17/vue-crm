<template>
    <div class="cash-acc-wrapper">
    </div>
</template>
<script>
import homeBill from '@/components/homeBill.vue'
import homeCurrency from '@/components/homeCurrency.vue'
export default {
    data(){
        return{
            currency:null,
            loading:true
        }
    },
    components:{
        homeBill, homeCurrency
    },
    computed:{
        
    }
}
</script>