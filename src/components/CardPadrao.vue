<template>
  <div class="container ">
    <div class="row ms-5 ">
        <div class="col-12 col-md-4 mt-5 ps-5"  v-for="(produto, index) in produtos" :key="index">
          <div class="card " style="max-width:250px;">
            <div class="card-body p-0" >
              <img v-if="produto.img" :src="produto.img" class="card-img-top" style="max-width:200px;max-height:250px; ">
              <h5 class="card-title mt-2 mx-auto fs-4 text-start border-bottom p-2" ><strong>{{ produto.nome }}</strong></h5>
              <p class="card-text text-start fs-3 fw-bold" style="max-width:250px;">{{ produto.descricao }}</p>
              <a class="btn btn-primary mb-3" >Adicionar ao carrinho</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>


<script lang="ts">
    import { defineComponent, ref,onMounted } from 'vue';
    import IProduto from '@/interface/IProduto';
    import { useCarrinho } from '../composables/HomeParaCarrinho';

    export default defineComponent({
        name:'AppCardPadrao',

       
        setup(){
          const produtos = ref<IProduto[]>([])     
                               

          const buscarProdutos= async() =>{
          const response = await fetch('http://localhost:3000/produtos')
          const data = await response.json();
          console.log(data)
          
          data.forEach((produto: IProduto) => {
            produto.img = require(`@/assets/${produto.img}`);
            produtos.value.push(produto); 
          });
   
        }

       

        onMounted(() => {
        buscarProdutos();
        });

            return{
                produtos,
                buscarProdutos
            }
            }
        }
    
        )
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
  box-shadow: 0px 4px 10px 2px rgba(69, 2, 255, 0.5);

}
.card:hover{

      transform: scale(1.1);
  }
</style>