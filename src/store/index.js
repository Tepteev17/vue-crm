import { createStore } from 'vuex'
import auth from './auth'
import info from './info'
import stateApp from './stateApp'
import noteInteraction from './noteInteraction'
export default createStore({
  state: {
    error:null,
    currencyRoute:null,
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
    currencyRoute: state => state.currencyRoute,
    boardTags:state => state.boardTags
  },
  mutations: {
    setError(state,error){
      state.error = error
    },
    clearError(state){
      state.error = null
    },
    changeCurrencyRoute(state, route){
      state.currencyRoute = route
    },
    setBoardTags(){

    }
  },
  actions: {
    changeCurrencyRouete(ctx,route){
      ctx.commit('changeCurrencyRouete',route)
    }
  },
  modules: {
    auth,info,stateApp,noteInteraction
  }
})
