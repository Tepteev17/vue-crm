import firebase from "firebase/app"

export default {
    actions:{
        async login({dispatch,commit},{email,password}){
            try {
                await firebase.auth().signInWithEmailAndPassword(email,password)
            } catch (e){
                commit('setError', e)
                throw e
            }
        },
        async register({dispatch,commit},{email,password,name,userNotes}){
            try {
                await firebase.auth().createUserWithEmailAndPassword(email,password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    bill:100000,
                    name:name,
                    uid:uid
                })
            } catch (e){
                commit('setError',e)
                throw e
            }
        },
        getUid(){
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({dispatch,commit}){
            await firebase.auth().signOut()
            commit('clearInfo')
        }
        
    }
}