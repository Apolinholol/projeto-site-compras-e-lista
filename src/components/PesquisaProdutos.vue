<template>
  <div class="input-group my-3">
      <input type="text" class="form-control" placeholder="Insira o produto a ser listado" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="novoProduto" >
      <button class="btn btn-primary" @click="this.adicionarProduto()">Adicionar</button>
    </div>

  <div class="container">
      <table class="table">
          <thead>
            <tr>
              <th scope="col" style="width: 1%;"></th> 
              <th scope="col">Produtos</th>
              <th scope="col">Remover | Alterar</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(produto, index) in produtos" :key="index" class="justify-content-center">
              <td scope="row">
                <input class="form-check-input" type="checkbox" 
                v-model="produto.done" 
                :id="'defaultCheck' + index">
              </td>
              <td :class="{ 'text-decoration-line-through': produto.done }">{{ produto.nome }}</td>
              <td><button class="fs-5"> <i class="bi bi-trash3-fill" @click="this.removerProduto(produto.nome)"></i> </button> 
                <button class="fs-5"> <i class="bi bi-pen" @click="this.alterarProduto(produto.nome)" ></i> </button></td>
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
              const novoProduto: IRelacaoProdutos  = {
                nome:"",
                done: false
              }      
            

              return{
                  produtos,
    
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
            },
            removerProduto(nome: string){
              this.produtos=this.produtos.filter(prod => prod.nome != nome)
            },
            alterarProduto(nome: string) {
                let prodAlterado = this.produtos.filter(prod => prod.nome == nome)[0]
                  this.novoProduto = prodAlterado.nome

               }
             }
          }
  )


</script>