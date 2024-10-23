<template>
    <div v-if="produtosCarrinho.length">
      <div class=" d-flex border-0 flex-row mx-auto mt-5 card m-2 border-bottom" style="max-width: 800px;max-height:300px;" v-for="(produto, index) in produtosCarrinho" :key="index">
        <img :src="produto.img" class="card-img-top" style="min-width: 300px;max-width: 300px;max-height:300px;" alt="Imagem do Produto">
        <div class="card-body d-flex ">
            <div class="p-5 no-wrap" style="min-width: 300px;max-width: 300px; max-height:300px;" >
          <h5 class="card-title">{{ produto.nome }}</h5>
          <p class="card-text">{{ produto.descricao }}</p>
            </div>
          <p class="p-5 m-auto d-flex">Quantidade: {{ produto.quantidade }}</p>
          <a  class="btn btn-dark m-auto" @click="removerDoCarrinho(produto.id)">Remover produto</a>
        </div>
      </div>
    </div>
    <div v-else>
        <h4 class="mt-5">Sem itens no carrinho 🥲</h4>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent , computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    name: 'AppCarrinho',
    setup() {
        const store = useStore()
        const produtosCarrinho = computed(() => store.state.produtosCarrinho);
        
        const removerDoCarrinho = ( id : number ) =>{
          store.dispatch('removerDoCarrinho', id)
        }
      
        return {
            produtosCarrinho,
            removerDoCarrinho
        };
      }
    });
  </script>
  
  <style scoped>
  /* Adicione os estilos conforme necessário */
  </style>
  