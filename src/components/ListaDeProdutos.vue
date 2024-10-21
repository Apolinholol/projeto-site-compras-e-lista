<template>
    <div>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <PesquisaProdutos/>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import PesquisaProdutos from './PesquisaProdutos.vue' 

  export default defineComponent({
    name: 'ListaDeProdutos',
    components:{PesquisaProdutos}
  });
  </script>
  