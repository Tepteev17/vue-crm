<template>
    <div class="board-item"
        :class="[boardItem.class,{'disable-board-item':isDisableItem || !length}]"
        v-on:dragover.prevent
        v-on:dragenter.prevent>
        <div class="header-board-item"
            v-on:drop="onDrop($event, this.boardItem)"
            draggable="true">
            <div class="subhead">
                {{ boardItem.title }}
                <span class="lenght-borad-item">( {{ length || '0'}} )</span>
            </div>
            <div class="wrapper-arrow-board-item" v-on:click="disableItemBoard" >
                <img src="@/assets/img/arrow-hide-board-item.svg" alt="">
            </div>
        </div>
        <div class="wrapper-board-item-list" :class="{'disable-board-item':isDisableItem}">
            <div class="board-item-list" 
                 v-on:dragover.prevent
                 v-on:dragenter.prevent
            >
                    <noteItemBoard
                        class="list-item"
                        v-for="itemNote in filterNotesList"
                        :key="itemNote.id"
                        v-bind:itemNote="itemNote"
                        v-on:drop="onDrop($event, this.boardItem)"
                        draggable="true"
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
        },
        async onDrop(e,tag){
            try{
                const oldNoteItem = JSON.parse(e.dataTransfer.getData('noteItem'))
                const noteItem = JSON.parse(e.dataTransfer.getData('noteItem'))
                await this.$store.dispatch('deleteCurrentNote', oldNoteItem)
                noteItem.tag = tag
                await this.$store.dispatch('createNewNote', noteItem)
                await this.$store.dispatch('fetchInfo')
            } catch (e){}
        }
    },
    components:{
        noteItemBoard
    }
}
</script>