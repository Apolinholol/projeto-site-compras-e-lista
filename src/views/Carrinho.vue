<template>
    <div class="produtos mt-3">
        <h1>Carrinho de compras para você !</h1>
        <ListaCarrinho/>
    </div>
  </template>
  
  <script lang="ts">
  import ListaCarrinho from '@/components/ListaCarrinho.vue';
  import { defineComponent } from 'vue';

  
  export default defineComponent({
    name: 'AppCarrinho',
    components: {ListaCarrinho}
  });
  </script>