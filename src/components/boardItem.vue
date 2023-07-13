<template>
    <div class="board-item"
        :class="[boardItem.class,{'disable-board-item':isDisableItem || !length}]">
        <div class="header-board-item">
            <div class="subhead">
                {{ boardItem.title }}
                <span class="lenght-borad-item">( {{ length }} )</span>
            </div>
            <div class="wrapper-arrow-board-item" v-on:click="disableItemBoard" >
                <img src="@/assets/img/arrow-hide-board-item.svg" alt="">
            </div>
        </div>
        <div class="wrapper-board-item-list" :class="{'disable-board-item':isDisableItem}">
            <div class="board-item-list" >
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
            isDisableItem:false,
            Noteslist:null
        }
    },
    computed:{
        filterNotesList(){
            try{
                const noteList = this.$store.getters.info.userNotesTags[this.boardItem.key]
                this.Noteslist = noteList
                return noteList
            } catch(e){}
        },
        length(){
            if(this.Noteslist != null){
                return Object.keys(this.Noteslist).length
            }
        }

    },
    methods:{
        disableItemBoard(){
            this.isDisableItem = !this.isDisableItem
        }
    },
    components:{
        noteItemBoard
    }
}
</script>