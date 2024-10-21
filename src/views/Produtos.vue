<template>

  <div class="mt-3 justify-content-center " >
    <h1>Os melhores produtos você encontra aqui!</h1>
        <Carousel/>
  </div>

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  import Carousel from "@/components/Carousel.vue"

  export default defineComponent({
  name: 'AppProdutos',
  components:{Carousel},
})
</script>