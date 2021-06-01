import  Vuex  from 'vuex'
import Vue from 'vue';

export default () => new Vuex.Store({
  state: () => ({
    result: {}
  }),
  mutations: {
    setResult(result) {
      this.state.result = result
    }
  },
  getters: {
    result: (state)=>state.result
  }
})
