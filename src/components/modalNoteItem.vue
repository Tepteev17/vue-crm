<template>
    <div   class="wrapper-note-interaction" 
        :class="{ active: this.$store.getters.isModalNoteItem }" 
        v-if="this.$store.getters.isModalNoteItem">
        <div class="note-interaction">
            <div class="header-note-interaction">
                <div class="head-title">
                    <div class="title">{{ currencyNoteItem.title}}</div>
                    <div class="tags-state new-items-class bg-band-gray" :class="currencyNoteItem.tag.class">
                        {{ currencyNoteItem.tag.title || 'new' }}</div>
                </div>
                <div class="wrapper-interaction-hide bg-band-gray" v-on:click="hideModal">
                    <div class="hide-btn">
                        <img src="@/assets/img/hide-icon-modal.svg" alt="">
                        <div>Collapse</div>
                    </div>
                </div>
            </div>
            <form action="" class="form-new-note" @submit.prevent="saveNotes">
                <div class="info-note-interaction">
                    <div class="wrapper-note-change-information">
                        <div class="note-change-information">
                            <div class="change-information-item flex-gap-8">
                                <div class="subhead-change-information-item silent-text flex-gap-8"><img
                                        src="@/assets/img/should-done-icon.svg" alt="">What should be done</div>
                                <div class="wrapper-input-should-done input-enty">
                                    <input type="text" placeholder="empty" v-model="newNoteData.shouldDone">
                                    <p :class="{ invalid: v$.newNoteData.shouldDone.$dirty && v$.newNoteData.shouldDone.required.$invalid }"
                                        class="error">
                                        The field should not be
                                        empty
                                    </p>
                                </div>
                            </div>
                            <div class="change-information-item flex-gap-8">
                                <div class="subhead-change-information-item silent-text flex-gap-8"><img
                                        src="@/assets/img/connect-icon.svg" alt="">Name</div>
                                <div class="wrapper-input-should-done input-enty">
                                    <input id="input-name" type="text" placeholder="empty" v-model="newNoteData.title"
                                        maxlength="25">
                                    <p :class="{ invalid: v$.newNoteData.title.$dirty && v$.newNoteData.title.required.$invalid }"
                                        class="error">
                                        The field should not be
                                        empty
                                    </p>
                                </div>
                            </div>
                            <div class="change-information-item flex-gap-8">
                                <div class="subhead-change-information-item silent-text flex-gap-8"><img
                                        src="@/assets/img/deadline-icon.svg" alt="">Start Date</div>
                                <div class="input-enty wrapper-date flex-gap-16 silent-text wrapper-date">
                                    <input type="date" placeholder="empty" v-model="newNoteData.startDate">
                                    <span>-</span>
                                    <input type="date" placeholder="empty" v-model="newNoteData.endDate">
                                </div>
                            </div>
                            <div class="change-information-item flex-gap-8">
                                <div class="change-tags profile">
                                    <div class="subhead-change-information-item silent-text flex-gap-8">Selected tags</div>
                                    <div class="wrapper-input-should-done wrapper-select-tags ">
                                        <!-- <v-select class="select-tags" :options="boardTags" label="title" 
                                            v-model="newNoteData.tag"></v-select> -->
                                            <div class="tags-state new-items-class bg-band-gray" :class="currencyNoteItem.tag.class">
                                                    {{ currencyNoteItem.tag.title || 'new' }}
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="subtasks-note-interaction"></div>
                <div class="footer-note-interaction">
                    <div class="wrapper-add-notes">
                        <button class="add-notes flex-gap-8" type="submit" >
                            <img src="@/assets/img/mark-check-add-icon.svg" alt="">
                            <div>Save change</div>
                        </button>

                    </div>
                </div>
            </form>
            <div class="footer-note-interaction">
                <div class="wrapper-add-notes">
                    <button class="remove-notes flex-gap-8" type="submit" v-on:click="removeNote">
                            <img src="@/assets/img/remove-icon.svg" alt="">
                            <div>Remove note</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vuelidate from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
import "vue-select/dist/vue-select.css";
export default {
    setup() {
        return {
            v$: Vuelidate()
        }
    },
    data() {
        return {
            newNoteData: {
                title: '',
                shouldDone: '',
                startDate: '',
                endDate: '',
                tag: 'new',
                id:''
            }
        }
    },
    methods: {
        hideModal() {
            this.$store.commit('hideModalNoteItem')
        },
        async saveNotes(){
            this.$store.dispatch('fetchInfo')
            await this.$store.dispatch('updateCurrentNote', this.newNoteData)
            this.$store.commit('hideModalNoteItem')
        },
        async removeNote(){
            console.log(1)
            await this.$store.dispatch('deleteCurrentNote', this.newNoteData)
            this.$store.commit('hideModalNoteItem')
            await this.$store.dispatch('fetchInfo')
        }
    },
    computed: {
        boardTags() {
            return this.$store.getters.boardTags
        },
       currencyNoteItem(){
           try{
                this.newNoteData = this.$store.getters.currencyNote
                return this.newNoteData
           }catch(e){
            console.log(e)
           }
        }
    },
    validations: {
        newNoteData: {
            title: { required },
            shouldDone: { required },
            startDate: {
                dateFileter(value){
                    if (value == ''){
                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = today.getFullYear();
                        today = yyyy + '-' + mm + '-' + dd;
                        this.newNoteData.startDate = today
                        return true
                    }
                }
            },
            tag:{required},
            id:{}
        }
    },

}
</script>