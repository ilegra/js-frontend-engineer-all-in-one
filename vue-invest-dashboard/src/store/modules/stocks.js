import axios from 'axios';

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCK'(state, stocks){
    state.stocks = stocks
  }
}

const actions = {
  init({commit}){
    axios.get('http://localhost:3050/api/stocks2').then( resp => {
      commit('SET_STOCK', resp.data);

    })
  }
}

const getters = {
  stocks: state => {
    return state.stocks;
  }
}


export default  {
  state,
  getters,
  mutations,
  actions
}
