<template>
    <div class="container">
      <div class="row ms-5">
        <div class="col-12 col-md-4 mt-5 ps-5" v-for="(produto, index) in produtosAleatorios" :key="index">
          <div class="card" style="max-width: 250px;">
            <div class="card-body ps-2">
              <img v-if="produto.img" :src="produto.img" class="card-img-top" style="max-width: 200px; max-height: 250px;">
              <h5 class="card-title mt-2 mx-auto fs-4 text-start border-bottom p-2"><strong>{{ produto.nome }}</strong></h5>
              <p class="card-text text-start fs-3 fw-bold" style="max-width: 250px;">{{ produto.descricao }}</p>
              <a v-if="!estaNoCarrinho(produto)" class="btn btn-primary mb-3" @click="adicionarAoCarrinho(produto)">Adicionar ao carrinho</a>
              <a v-else class="btn btn-outline-primary mb-3" @click="removerDoCarrinho(produto.id)">Remover do Carrinho</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, computed } from 'vue';
  import IProduto from '@/interface/IProduto';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    name: 'AppCardPadrao',
    props:{
        adicionarAoCarrinho: {
        type: Function,
        required: true
        },
        removerDoCarrinho: {
        type: Function,
        required: true
        }
    },  
    setup() {
      const produtos = ref<IProduto[]>([]);
      const store = useStore()

      const embaralharArray = (array: IProduto[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
  
      const produtosAleatorios = computed(() => {
        const produtosEmbaralhados = embaralharArray([...produtos.value]);
        return produtosEmbaralhados.slice(0, 3); // Retorna os 3 primeiros produtos do array embaralhado
      });
      const estaNoCarrinho = (produto : IProduto )=> {
          return store.state.produtosCarrinho.find( (item : IProduto) => item.id == produto.id)  
        }
      const buscarProdutos = async () => {
        const response = await fetch('http://localhost:3000/produtos');
        const data = await response.json();
        produtos.value = data.map((produto :IProduto)=> ({
          ...produto,
          img: require(`@/assets/${produto.img}`)
        }));
      };
  
      onMounted(() => {
        buscarProdutos();
      });
  
      return {
        produtos,
        produtosAleatorios,
        buscarProdutos,
        estaNoCarrinho
       
      };
    }
  });
  </script>
  