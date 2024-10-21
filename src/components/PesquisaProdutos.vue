<template>
    <div class="input-group my-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="novoProduto" >
        <button class="btn btn-primary" @click="this.adicionarProduto()">Adicionar</button>
      </div>

    <div class="container">
        <table class="table">
            <thead>
              <tr>
                <th scope="col" style="width: 1%;"></th> 
                <th scope="col">Produtos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(produto, index) in produtos" :key="index">
                <td scope="row">
                  <input class="form-check-input" type="checkbox" v-model="produto.done" value="" id="defaultCheck1">
                </td>
                <td>{{ produto.nome }}</td>
            </tr>
            </tbody>
          </table>
    </div>

</template>
<script lang="ts">
    import {defineComponent} from 'vue'
    import IRelacaoProdutos from '@/interface/IRelacaoProdutos';

    export default defineComponent(
        {
            name:"AppPesquisaProdutos",
            componentes :{},
            data(){

                const produtos: IRelacaoProdutos[] = []
                let novoProduto: IRelacaoProdutos  = {
                  nome:"",
                  done: false
                }      
                return{
                    produtos
                }
            },
            methods:{
              adicionarProduto() {
                if (this.novoProduto.trim() !== '') { // Verifica se o input não está vazio
                    const produto: IRelacaoProdutos = {
                        nome: this.novoProduto,
                        done: false
                    };
                    this.produtos.push(produto); 
                    this.novoProduto = ''; 
                }
              }
            }
        }
    )


</script>