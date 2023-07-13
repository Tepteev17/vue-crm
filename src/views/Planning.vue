<template>
    <div class="planning-wrapper">
        <div class="planning-board">
            <boardItem
                v-for="boardItem in nameBoardItems"
                :key="boardItem.key"
                v-bind:boardItem="boardItem"
                />
        </div>
    </div>
</template>
<script>
import boardItem from '@/components/boardItem.vue'
export default{
    components:{
        boardItem
    },
    data(){
        return{
            nameBoardItems:[
                {title:'New', class:'new-items-class',key:'new'},
                {title:'In work', class:'in-work-items-class',key:'inWork'},
                {title:'Suspended', class:'suspended-items-class',key:'suspended'},
                {title:'Completed', class:'complited-items-class',key:'completed'},
                {title:'canceled', class:'canceled-items-class',key:'canceled'}
            ]
        }
    },

}
</script>