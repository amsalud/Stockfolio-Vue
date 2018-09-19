import stocks from '../../dummy_data/stocks'

const state = {
  stocks: []
}

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks
  }
  //   RANDOM_STOCKS(state){
  //       state
  //   }
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit()
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RANDOM_STOCKS')
  }
}

const getters = {
  stocks: state => state.stocks
}

export default {
  state,
  mutations,
  actions,
  getters
}
