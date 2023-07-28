<template>
    <Chart 
        :options="options"
    />
</template>
<script>
import VueTradingView from 'vue-trading-view';
import { Chart } from 'vue-tradingview-widgets';
export default {
    props: {
        msg: String
    },
    data(){
        return{
            options:{
                width:'100%',
                height:'100%',
                "locale": "ru",
                "hide_side_toolbar": false,
                "allow_symbol_change": true,
                symbol:'USDRUB'
            }
        }
    },
    components: {
        VueTradingView,Chart
    }
}
</script>