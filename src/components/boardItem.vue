<template>
    <div class="board-item"
        :class="boardItem.class">
        <div class="header-board-item">
            <div class="subhead">
                {{ boardItem.title }}
                <span class="lenght-borad-item">( {{ 0 }} )</span>
            </div>
            <div class="wrapper-arrow-board-item">
                <img src="@/assets/img/arrow-hide-board-item.svg" alt="">
            </div>
        </div>
        <div class="wrapper-board-item-list">
            <div class="board-item-list">
                    <noteItemBoard
                        class="list-item"
                        v-for="itemNote in filterNotesList"
                        :key="itemNote"
                        v-bind:itemNote="itemNote"
                    />
            </div>
        </div>
    </div>
</template>
<script>
import noteItemBoard from '@/components/noteItemBoard.vue'
export default{
    props:{
        boardItem:{
            type:Object,
            requered:true,
        }
    },
    data(){
        return{
        }
    },
    computed:{
        filterNotesList(){
            try{
                const noteList = this.$store.getters.info.userNotesTags[this.boardItem.key]
                return noteList
            } catch(e){}
        }
    },
    components:{
        noteItemBoard
    }
}
</script>