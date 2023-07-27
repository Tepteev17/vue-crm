<template>
    <div class="charts-wrapper">
        <TradingView/>
    </div>
</template>
<script>
import TradingView from '@/components/VueTradingView.vue'
import homeBill from '@/components/homeBill.vue'
import homeCurrency from '@/components/homeCurrency.vue'
export default {
    data() {
        return {
            currency: null,
            loading: false,
            currencyData: {}
        }
    },
    components: {
        homeBill, homeCurrency, TradingView
    },
    computed: {
    }
}
</script>