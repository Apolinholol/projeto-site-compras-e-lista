<template>
  <div class="container ">
    <div class="row ms-5 ">
        <div class="col-12 col-md-4 mt-5 ps-5"  v-for="(produto, index) in produtos" :key="index">
          <div class="card " style="max-width:250px;">
            <div class="card-body p-0" >
              <img v-if="produto.img" :src="produto.img" class="card-img-top" style="max-width:200px;max-height:250px; ">
              <h5 class="card-title mt-2 mx-auto fs-4 text-start border-bottom p-2" ><strong>{{ produto.nome }}</strong></h5>
              <p class="card-text text-start fs-3 fw-bold" style="max-width:250px;">{{ produto.descricao }}</p>
              <a href="#" class="btn btn-primary mb-3">Adicionar ao carrinho</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>


<script lang="ts">
    import { defineComponent, ref,onMounted } from 'vue';
    import IProduto from '@/interface/IProduto';
    export default defineComponent({
        name:'AppCardPadrao',

        setup(){
        const produtos = ref<IProduto[]>([                              
                                        //Por estar usando o Vite , a importacao do caminho da imagem é assim: require(@/conteudo/url)
        {
            id:1,descricao:"R$ 6000,00",
            nome: "RTX 3060",
            img: require("@/assets/rtx3060.png")
        },
        {
            id:2,descricao:"R$ 6000,00",
            nome: "RTX 3050",
            img: require("@/assets/rtx3050.png")
        },
        {
            id:3,descricao:"R$ 6000,00",
            nome: "RTX 4060",
            img: require("@/assets/rtx4060.png")
        },
        {
            id:4,descricao:"R$ 6000,00",
            nome: "Rx 6600",
            img: require("@/assets/rx6600.png"
)        },
        {
            id:5,descricao:"R$ 6000,00",
            nome: "Rx 6650",
            img: require("@/assets/rx6650.png")
        },
        {
            id:6,descricao:"R$ 6000,00",
            nome: "Rx 7600",
            img: require("@/assets/rx7600.png")
        },
        ])                 

        const carregarProdutos = () => {
            produtos.value
        }

        onMounted(() => {
        carregarProdutos();
        });

            return{
                produtos
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