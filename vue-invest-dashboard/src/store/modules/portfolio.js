const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  'BUY_STOCK'(state, order){
    state.funds -= order.price * order.quantity;
    state.stocks.push(order);
  }
}

const actions = {
  buyStock({commit}, order){
    commit('BUY_STOCK', order);
  }
};

const getters = {
  stocksPortfolio: state => {
    return state.stocks;
  },
  funds: state => {
    return state.funds;
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
