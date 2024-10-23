<template>
    <ul class="list-group list-group-flush ">
        <li class="list-group-item border-0 p-2 " v-for="(produto, index) in produtosCarrinho" :key="index">
          <div class="d-flex flex-row justify-content-start" style="width: 18rem;">
            <img :src="produto.img" class="card-img-top" alt="Imagem do Produto">
            <div class="card-body">
              <h5 class="card-title mb-1">{{ produto.nome }}</h5>
              <p class="card-text">{{ produto.descricao }} | Quantidade: {{ produto.quantidade }}</p>
              <a href="#" class="btn btn-primary">Ver Produto</a>
            </div>
          </div>
        </li>
      </ul>
  </template>
  
  <script lang="ts">
  import { defineComponent , computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    name: 'AppCarrinho',
    setup() {
        const store = useStore()
        const produtosCarrinho = computed(() => store.state.produtosCarrinho);
        
      
        return {
            produtosCarrinho
        };
      }
    });
  </script>
  
  <style scoped>
  /* Adicione os estilos conforme necessário */
  </style>
  