import { createStore } from 'vuex'
import IProduto from '@/interface/IProduto'

export default createStore({
  state: {
    produtosCarrinho: [] as IProduto[]
  },
  getters: {
  },
  mutations: {
    adicionarAoCarrinho(state,produto){
      state.produtosCarrinho.push(produto)
    },
    removerDoCarrinho(state,id){
     state.produtosCarrinho = state.produtosCarrinho.filter( prod => prod.id != id)
    },
  },
  actions: {
    adicionarAoCarrinho({commit}, produto){
      commit('adicionarAoCarrinho',produto)
    },
    removerDoCarrinho({commit}, produtoId){
      commit('removerDoCarrinho',produtoId)
    },
  },
  modules: {
  }
})
