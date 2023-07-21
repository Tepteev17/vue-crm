export default{
    state:{
        isModalActive:false,
        isModalNoteItemActive:false,
        currencyNote:{},
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
        currencyNote(state,currencyNote){
            state.currencyNote = currencyNote
        },
        showSidebar(state){
            state.isSidebarActive = !state.isSidebarActive
        }
    },
    getters:{
        isModal:state => state.isModalActive,
        isModalNoteItem: state => state.isModalNoteItemActive,
        currencyNote: state => state.currencyNote,
        isSidebarState: state => state.isSidebarActive
    }
}