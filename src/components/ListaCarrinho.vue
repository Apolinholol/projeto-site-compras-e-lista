<template>
    <ul class="list-group list-group-flush justify-content-between">
      <li class="list-group-item" v-for="(produto, index) in produtosCarrinho" :key="index">
        <div class="d-flex w-50 justify-content-between">
          <h5 class="mb-1">{{ produto.nome }}</h5>
        </div>
      </li>
    </ul>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useCarrinho } from '@/composables/HomeParaCarrinho';
  
  export default defineComponent({
    name: 'AppCarrinho',
    setup() {
      const { produtosCarrinho } = useCarrinho();
  
      return {
        produtosCarrinho
      };
    }
  });
  </script>
  
  <style scoped>
  /* Adicione os estilos conforme necessário */
  </style>
  