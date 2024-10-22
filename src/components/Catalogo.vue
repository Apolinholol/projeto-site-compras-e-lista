<template>
    <div class="card" style="width: 18rem;">
        <img  v-if="produto && produto.img"  :src="produto.img" class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">{{produto.nome}}</h5>
          <p class="card-text">{{produto.descricao}}</p>
          <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
        </div>
      </div>
</template>
<script lang="ts">
    import {defineComponent} from 'vue'
    import IProduto from '@/interface/IProduto'

    export default defineComponent(
        {
            name:"AppCatalogo",
            setup(){

                const produtos: IProduto[] = []
                

                return{
                    produtos
                }
            }
        }
    )

</script>