export default{
    state:{
        isModalActive:false,
        isModalNoteItemActive:false,
        currentNote:{},
        isSidebarActive:false
    },
    mutations:{
        hideModal(state){
            state.isModalActive = false
        },
        showModal(state){
            state.isModalActive = true
        },
        hideModalNoteItem(state){
            state.isModalNoteItemActive = false
        },
        showModalNoteItem(state){
            state.isModalNoteItemActive = true
        },
        currentNote(state,currentNote){
            state.currentNote = currentNote
        },
        showSidebar(state){
            state.isSidebarActive = !state.isSidebarActive
        },

    },
    getters:{
        isModal:state => state.isModalActive,
        isModalNoteItem: state => state.isModalNoteItemActive,
        currentNote: state => state.currentNote,
        isSidebarState: state => state.isSidebarActive
    }
}