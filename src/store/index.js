import { createStore } from 'vuex'
import auth from './auth'
import info from './info'
import stateApp from './stateApp'
import noteInteraction from './noteInteraction'
export default createStore({
  state: {
    error:null,
    CurrentRoute:null,
    boardTags:[
      {title:'New', class:'new-items-class',key:'new'},
      {title:'In work', class:'in-work-items-class',key:'inWork'},
      {title:'Suspended', class:'suspended-items-class',key:'suspended'},
      {title:'Completed', class:'complited-items-class',key:'completed'},
      {title:'canceled', class:'canceled-items-class',key:'canceled'}
    ]
  },
  getters: {
    error: state => state.error,
    CurrentRoute: state => state.CurrentRoute,
    boardTags:state => state.boardTags
  },
  mutations: {
    setError(state,error){
      state.error = error
    },
    clearError(state){
      state.error = null
    },
    changeCurrentRoute(state, route){
      state.CurrentRoute = route
    }
  },
  actions: {
    changeCurrentRouete(ctx,route){
      ctx.commit('changeCurrentRouete',route)
    }
  },
  modules: {
    auth,info,stateApp,noteInteraction
  }
})
