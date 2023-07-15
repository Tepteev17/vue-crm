<template>
    <div class="wrapper-note-interaction" :class="{ active: this.$store.getters.isModal }">
        <div class="note-interaction">
            <div class="header-note-interaction">
                <div class="head-title">
                    <div class="title">{{ newNoteData.title || "No name" }}</div>
                    <div class="tags-state new-items-class bg-band-gray" :class="newNoteData.tag.class">
                        {{ newNoteData.tag.title || 'new' }}</div>
                </div>
                <div class="wrapper-interaction-hide bg-band-gray" v-on:click="hideModal">
                    <div class="hide-btn">
                        <img src="@/assets/img/hide-icon-modal.svg" alt="">
                        <div>Collapse</div>
                    </div>
                </div>
            </div>
            <form action="" class="form-new-note" @submit.prevent="addNotes">
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
                                    <div class="subhead-change-information-item silent-text flex-gap-8">Select tags</div>
                                    <div class="wrapper-input-should-done wrapper-select-tags ">
                                        <v-select class="select-tags" :options="boardTags" label="title"
                                            v-model="newNoteData.tag"></v-select>
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
                            <div>Add Notes</div>
                        </button>
                    </div>
                </div>
            </form>
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
                tag: ''
            }
        }
    },
    methods: {
        hideModal() {
            this.$store.commit('hideModal')
        },

        async addNotes() {
            if (this.v$.$invalid) {
                this.v$.$touch()
                console.log(this.v$)
                return
            }
            if (!this.v$.$error) {
                try {
                    this.$store.dispatch('fetchInfo')
                    await this.$store.dispatch('createNewNote', this.newNoteData)
                    this.$store.commit('hideModal')
                    this.newNoteData = {
                            title: '',
                            shouldDone: '',
                            startDate: '',
                            endDate: '',
                            tag: '',
                        }
                } catch (err) {}
            }
        }
    },
    computed: {
        boardTags() {
            return this.$store.getters.boardTags
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
            tag:{required}
        }
    },

}
</script>