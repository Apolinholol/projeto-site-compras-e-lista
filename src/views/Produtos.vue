<template>
  <div class="container-fluid principal m-0">
  <div class=" justify-content-center " >
    <h1>Os melhores produtos você encontra aqui!</h1>

            <Carousel/>

            <CardRecomend/>

   
     </div>
    </div>

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

  import Carousel from "@/components/Carousel.vue"
  import CardRecomend from "@/components/CardRecomend.vue"

  export default defineComponent({
  name: 'AppProdutos',
  components:{Carousel, CardRecomend},
})
</script>
<style scoped>
h1{
  color:orange;
}
.principal{
background-image: url('../assets/universo.jpg'); 
background-size: cover;
background-attachment: fixed; /* Fixa a imagem ao fazer scroll */
background-position: center;
background-repeat: no-repeat;
min-height: 100vh; 
}
</style>