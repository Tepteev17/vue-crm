<template>
    <div class="wrapper-note-interaction" 
        :class="{active:this.$store.getters.isModal}">
        <div class="note-interaction">
            <div class="header-note-interaction">
                <div class="head-title">
                    <div class="title">{{ newNoteData.title }}</div>
                    <div class="tags-state new-items-class bg-band-gray">New</div>
                </div>
                <div class="wrapper-interaction-hide bg-band-gray"
                    v-on:click="hideModal">
                    <div class="hide-btn">
                        <img src="@/assets/img/hide-icon-modal.svg" alt=""> 
                        <div>Collapse</div>
                    </div>
                </div>
            </div>
            <form action="" class="form-new-note">
                <div class="info-note-interaction">
                <div class="wrapper-note-change-information">
                    <div class="note-change-information">
                        <div class="change-information-item flex-gap-8">
                            <div class="subhead-change-information-item silent-text flex-gap-8"><img src="@/assets/img/should-done-icon.svg" alt="">What should be done</div>
                            <div class="wrapper-input-should-done input-enty">
                                <input type="text" placeholder="empty" v-model="newNoteData.shouldDone">
                            </div>
                        </div>
                        <div class="change-information-item flex-gap-8">
                            <div class="subhead-change-information-item silent-text flex-gap-8"><img src="@/assets/img/connect-icon.svg" alt="">Name</div>
                            <div class="wrapper-input-should-done input-enty">
                                <input type="text" placeholder="empty" v-model="newNoteData.title" maxlength="25">
                            </div>
                        </div>
                        <div class="change-information-item flex-gap-8">
                            <div class="subhead-change-information-item silent-text flex-gap-8"><img src="@/assets/img/deadline-icon.svg" alt="">Start Date</div>
                            <div class="input-enty wrapper-date flex-gap-16 silent-text wrapper-date">
                                <input type="date" placeholder="empty" v-model="newNoteData.startDate">
                                <span>-</span>
                                <input type="date" placeholder="empty" v-model="newNoteData.endDate">
                            </div>
                        </div>
                        <div class="change-information-item flex-gap-8">
                            <div class="change-tags profile">
                                <div class="subhead-change-information-item silent-text flex-gap-8">Select tags</div>
                            <div class="wrapper-input-should-done wrapper-select-tags input-enty">
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="subtasks-note-interaction"></div>
                <div class="footer-note-interaction"
                 v-on:click="addNotes">
                <div class="wrapper-add-notes">
                    <button class="add-notes flex-gap-8">
                        <img src="@/assets/img/mark-check-add-icon.svg" alt="">
                        <div>Add Notes</div>
                    </button>
                </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            newNoteData:{
                title:'Noname',
                shouldDone:'',
                startDate:'',
                endDate:'',
                tag:'new'
            }
        }
    },
    methods:{
        hideModal(){
            this.$store.commit('hideModal')
        },
        async addNotes(){
            this.$store.dispatch('fetchInfo')
            await this.$store.dispatch('createNewNote',this.newNoteData)
            this.$store.commit('hideModal')
        }
    },
    computed:{
        boardTags(){
            return this.$store.getters.boardTags
        }

    }
}
</script>