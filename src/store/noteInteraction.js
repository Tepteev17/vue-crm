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
                commit('setError',e)
                console.log(e)
            }
        },
        async deleteCurrentNote({dispatch,commit},noteItem){
            try{
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info/userNotesTags/${noteItem.tag.key}/${noteItem.id}`).remove()
            }catch (e){
                commit('setError',e)
                console.log(e)
            }
        },
        async createNewSubtasks({dispatch,commit}, objItem){
            try{
                const uid = await dispatch('getUid')
                const newTasks = await firebase.database().ref(`/users/${uid}/info/userNotesTags/${objItem.noteItem.tag.key}/${objItem.noteItem.id}/subtasksList/`).push(objItem.title)
                return newTasks.key
            }catch (e){
                commit('setError',e)
                console.log(e)
            }
        }
    }
}
