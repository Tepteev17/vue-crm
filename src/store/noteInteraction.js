import firebase from "firebase/compat/app"
export default{
    actions:{
        async createNewNote({dispatch,commit},userNotes){
            
            try {
                const uid = await dispatch('getUid')
                const newNote = await firebase.database().ref(`/users/${uid}/info/userNotesTags/${userNotes.tag}`).push(userNotes)
            } catch (e){
                commit('setError',e)
                console.log(e)
            }
        }
    }
}
