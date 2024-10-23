<template>
  <CardRecomend/>

  <div class="container ">
    <div class="row ms-5 ">
        <div class="col-12 col-md-4 mt-5 ps-5"  v-for="(produto, index) in produtos" :key="index">
          <div class="card " style="max-width:250px;">
            <div class="card-body ps-2" >
              <img v-if="produto.img" :src="produto.img" class="card-img-top" style="max-width:200px;max-height:250px; ">
              <h5 class="card-title mt-2 mx-auto fs-4 text-start border-bottom p-2" ><strong>{{ produto.nome }}</strong></h5>
              <p class="card-text text-start fs-3 fw-bold" style="max-width:250px;">{{ produto.descricao }}</p>
              <a v-if="!estaNoCarrinho(produto)" class="btn btn-primary mb-3" @click="adicionarAoCarrinho(produto)">Adicionar ao carrinho</a>
              <a v-else class="btn btn-outline-primary mb-3" @click="removerDoCarrinho(produto.id)">Remover do Carrinho</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        {{ produtosCarrinho.length }}
  </template>


<script lang="ts">
    import { defineComponent, ref,onMounted , computed} from 'vue';
    import IProduto from '@/interface/IProduto';
    import CardRecomend from '@/components/CardRecomend.vue'  
    import { useStore } from 'vuex';

    export default defineComponent({
        name:'AppCardPadrao',
        components:{CardRecomend},
       
        setup(){
          const store = useStore();
          const produtos = ref<IProduto[]>([])     
                               
          const produtosCarrinho = computed(() =>{
             return store.state.produtosCarrinho
          })
          const estaNoCarrinho = (produto : IProduto )=> {
          return store.state.produtosCarrinho.find( (item : IProduto) => item.id == produto.id)  
        }

          const buscarProdutos= async() =>{
          const response = await fetch('http://localhost:3000/produtos')
          const data = await response.json();
          console.log(data)
          
          data.forEach((produto: IProduto) => {
            produto.img = require(`@/assets/${produto.img}`);
            produtos.value.push(produto); 
          });
   
        }

        const adicionarAoCarrinho = (produto: IProduto) => {
          store.dispatch('adicionarAoCarrinho', produto); 
        };

        const removerDoCarrinho = ( id : number ) =>{
          store.dispatch('removerDoCarrinho', id)
        }
        
        onMounted(() => {
        buscarProdutos();
        });

            return{
                produtos,
                buscarProdutos,
                adicionarAoCarrinho,
                produtosCarrinho,
                estaNoCarrinho,
                removerDoCarrinho
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