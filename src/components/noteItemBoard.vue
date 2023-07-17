<template>
    <div 
        class="wrapper-note-item" 
        v-on:click="currencyNote"
        v-on:dragstart="onDragStart($event, itemNote)"
    >
        <div class="content-wrapper-note-item ">
            <div class="position-number">#16</div>
            <div class="subhead">{{itemNote.title}}</div>
            <div class="date-wrapper flex-gap-16 wrapper-date">
                <div class="start-date silent-text">{{ itemNote.startDate }}</div>
                <span>-</span>
                <div class="end-date silent-text">{{ itemNote.endDate }}</div>
            </div>
            <div class="wrapper-details flex-gap-16">
                    <div class="details-item flex-gap-8">
                        <img src="../assets/img/link-icon.svg" alt="">
                    </div>
                    <div class="details-item flex-gap-8">
                        <img src="../assets/img/danger-icon.svg" alt="">
                    </div>
                    <div class="details-item flex-gap-8">
                        <img src="../assets/img/setting-icon.svg" alt="">
                    </div>
                    <div class="details-item flex-gap-8">
                        <img src="../assets/img/message-icon.svg" alt="">
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        itemNote:{
            type:Object,
            requered:true
        }
    },
    methods:{
        currencyNote(){
            this.$store.commit('currencyNote',this.itemNote)
            this.$store.commit('showModalNoteItem')
        },
        onDragStart(e,item){
            e.dataTransfer.dropEffect = 'move'
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('noteItem',JSON.stringify(item))
        }
    }
}
</script>