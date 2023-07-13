export default{
    state:{
        isModalActive:false
    },
    mutations:{
        hideModal(state){
            state.isModalActive = false
        },
        showModal(state){
            state.isModalActive = true
        }
    },
    getters:{
        isModal:state => state.isModalActive
    }
}