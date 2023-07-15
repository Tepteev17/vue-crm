import firebase from "firebase/app"
export default{
    actions:{
        async createNewNote({dispatch,commit},userNotes){
            try {
                const uid = await dispatch('getUid')
                const newNote = await firebase.database().ref(`/users/${uid}/info/userNotesTags/${userNotes.tag.key}`).push(userNotes)
                firebase.database().ref(`/users/${uid}/info/userNotesTags/${userNotes.tag.key}/${newNote.key}`).update({id:newNote.key})
            } catch (e){
                commit('setError',e)
                console.log(e)
            }
        },
        async updateCurrentNote({dispatch,commit},updateNote){
            try{
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info/userNotesTags/${updateNote.tag.key}/${updateNote.id}`).update(updateNote)
            } catch (e){

            }
        }
    }
}
