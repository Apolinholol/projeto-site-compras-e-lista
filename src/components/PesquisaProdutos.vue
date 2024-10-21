<template>
    <div class="input-group my-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
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
              <tr>
                <td scope="row">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                </td>
                <td>{{ produto.nome }}</td>
            </tr>
            </tbody>
          </table>
    </div>

</template>
<script>
    import {defineComponent} from 'vue'
    import IRelacaoProdutos from '@/interface/IRelacaoProdutos';

    export default defineComponent(
        {
            name:"AppPesquisaProdutos",
            componentes :{},
            data(){

                const produto: IRelacaoProdutos = {

                }
                return{
                    produto
                }
            }
        }
    )


</script>