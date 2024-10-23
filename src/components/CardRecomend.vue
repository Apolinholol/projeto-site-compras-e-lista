<template>
    <div class=" d-flex flex-row justify-content-center mx-auto">
    <div class="card mx-5 mt-5 " style="width: 18rem;" v-for="(produto,index) in produtos" :key="index">
        <div class="card-body ">
            <img  v-if="produto.img"  :src="produto.img" class="card-img-top " style='min-width:150px; max-width:250px; min-height:100px;max-height:300px;object-fit:cover;' >
          <h5 class="card-title mt-2 mx-auto fs-4 text-start border-bottom p-2" style='max-width:250px;' > <strong> {{produto.nome}} </strong></h5>           
          <p class="card-text text-start fs-3 fw-bold" style='max-width:250px;'>{{produto.descricao}}</p>
          <a href="#" class="btn btn-primary mb-3">Adicionar ao carrinho</a>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
    import { defineComponent, ref,onMounted } from 'vue';
    import IProduto from '@/interface/IProduto'

    export default defineComponent(
        {
            name:"AppCardRecomend",
            setup(){

                const produtos = ref<IProduto[]>([                              
                                                //Por estar usando o Vite , a importacao do caminho da imagem é assim
                    { id: 1, nome: 'Placa de Video RX 7600', descricao: 'R$ 1800,00', img: require('@/assets/rx7600.png') },
                    { id: 2, nome: 'Placa de Video RX 6650XT', descricao: 'R$ 1650,00', img: require('@/assets/rx6650.png') },
                    { id: 3, nome: 'Placa de Video RTX 4060', descricao: 'R$ 2100,00', img: require('../assets/rtx4060.png') },
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