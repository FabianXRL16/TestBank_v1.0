export const state = () => ({
  _results: {
    /*"Raz. Matemático": { total: 15, goods: 14, wrongs: 1 },
    "Raz. Verbal": { total: 15, goods: 12, wrongs: 2 },
    Aritmética: { total: 6, goods: 6, wrongs: 0 },
    Álgebra: { total: 6, goods: 6, wrongs: 0 },
    Geometría: { total: 6, goods: 5, wrongs: 0 },
    Física: { total: 6, goods: 4, wrongs: 2 },
    Economía: { total: 6, goods: 5, wrongs: 1 },
    Historia: { total: 6, goods: 3, wrongs: 0 },
    Literatura: { total: 6, goods: 4, wrongs: 1 },
    Biología: { total: 6, goods: 2, wrongs: 1 },
    Anatomía: { total: 6, goods: 0, wrongs: 2 },
    Química: { total: 6, goods: 2, wrongs: 2 },*/
  }
})
export const getters = {
  getResults(state) {
    return state._results
  }
}
export const actions = {
  save({ commit }) {
    commit(saveResults)
  }
}
export const mutations = {
  saveResults(state,newResults) {
    state._results = newResults
  }
}
