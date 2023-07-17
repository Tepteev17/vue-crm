<template>
    <div class="planning-wrapper">
        <div class="planning-board">
            <boardItem
                v-for="boardItem in getNameBoardItems"
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
    computed:{
        getNameBoardItems(){
            try{
                return this.$store.getters.boardTags
            }catch(e){}
        }
    }

}
</script>