<template>
    <div class="subtasks-note-interaction-wrapper ">
        <div class="subtasks-note-interaction-header bg-band-gray">
            <div class="flex-gap-8 subhead">
                <img src="@/assets/img/planning.svg" alt="">
                Subtasks
            </div>
            <div class="subtask-icon-add-and-hide">
                 <div class="dropdown"
                      v-on:mouseover="isActiveWindow = true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M12 19V5" stroke="#9192AD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="wrapper-hide-subtasks"
                     v-on:click="isDropdownSubtasksList = !isDropdownSubtasksList"
                     :class="{hide:!isDropdownSubtasksList}"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18.0859 18.0859L12.1029 12.0859L18.0859 6.08594" stroke="#9192AD" stroke-width="1.5" stroke-linecap="round"       stroke-linejoin="round"/>
                        <path d="M11.8965 18.0859L5.91348 12.0859L11.8965 6.08594" stroke="#9192AD" stroke-width="1.5" stroke-linecap="round"   stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="subtasks-note-interaction-add-window dropdown-content"
             :class="{active:isActiveWindow}"
             v-on:mouseleave="isActiveWindow = false">
                <div class="title">New subtasks</div>
            <div class="subtasks-note-interaction-unput input-enty">
                <input type="text" 
                       placeholder="Add new subtasks" 
                       v-model="subtaskTitle">
                <p :class="{ invalid: v$.subtaskTitle.$dirty && v$.subtaskTitle.required.$invalid }"
                    class="error">
                                 The field should not be
                                 empty
                </p>
            </div>
            <div id="btn-subtasks" class="btn-blue base-btn"
                    v-on:click="addSubtask" 
                    type="submit">Add subtask</div>
        </div>

        <div class="subtasks-note-interaction-list" v-if="isDropdownSubtasksList">
             <div class="subtasks-note-interaction-item silent-text"
                  v-for="(value,name, index) in subtasksListComputed"
                  :key="index">
                <div class="flex-gap-8 subhead">
                    <div class="position-number">
                         #{{ index+1 }}
                    </div>
                    <div>{{ value }}</div>
                </div>
                <div class="delete-subtasks"
                    v-on:click="deleteSubtasksItem(name)"
                >
                    <img src="@/assets/img/remove-icon.svg" alt="">
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import Vuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
    props: {
        subtasksList: {
            required: true,
            type: Object
        }
    },
    setup() {
        return {
            v$: Vuelidate()
        }
    },
    data() {
        return {
            subtaskTitle: '',
            isDropdownSubtasksList: true,
            isActiveWindow: false,
            localSubtasksList: {}
        }
    },
    methods: {
        async addSubtask() {
            if (this.v$.$invalid) {
                this.v$.$touch()
                return
            }
            const key = await this.$store.dispatch('createNewSubtasks',{
                    noteItem: this.$store.getters.currentNote,
                    title: this.subtaskTitle
                }
            )
            this.localSubtasksList[key] = this.subtaskTitle
            this.subtaskTitle = ''
            this.isActiveWindow = false
        },
        async deleteSubtasksItem(name) {
            delete this.localSubtasksList[name]
            await this.$store.dispatch('deleteSubtasksItem', { noteItem: this.$store.getters.currentNote, key: name })
        }
    },
    computed: {
        subtasksListComputed() {
            if (this.subtasksList) {
                this.localSubtasksList = this.subtasksList
            } else {
                this.localSubtasksList = {}
            }
            return this.localSubtasksList
        }
    },
    validations: {
        subtaskTitle: { required }
    }
}
</script>