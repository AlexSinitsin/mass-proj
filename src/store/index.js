import Vue from 'vue'
import Vuex from 'vuex';
import data from '../data.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: data,
  },
  getters: {
    data: (state) => state.data,
    stageArrowId: (state) => state.data.filter(i => {
      return i.games.filter(a => a.isPlayed === true).length === 1
    }).length,
    sumResult: (state) => state.data.reduce((acc, i) => {
        let gamesResults = i.games.map(a => {
          return a.bestResult
        }).sort((a, b) => a - b)
        let result = acc + gamesResults.find((a, index, arr) => index === (arr.length - 1))
      
        return result
    }, 0)
  },
  mutations: {
    addBestResult(state, stage) {
      state.data.map((i) => {
 
        if(i.id === stage.id) {
          i.games.map((a) => {
  
            if(a.name === stage.name) {

              a.bestResult = stage.bestResult
              return a
            } else {
              return a
            }
          })
          return i
        } else {
          return i
        }
      })
    },
    addPlayed(state, stage) {
      state.data.map((i) => {
        if(i.id === stage.id) {
          i.games.map((a) => {
            if(a.name === stage.name) {
              a.isPlayed = true
              return a
            } else {
              return a
            }
          })
          return i
        } else {
          return i
        }
      })
    }
  },
  actions: {},
});