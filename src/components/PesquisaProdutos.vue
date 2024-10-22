<template>
  <div class="input-group my-3">
    <input 
      type="text" 
      class="form-control" 
      placeholder="Insira o produto a ser listado" 
      aria-label="Recipient's username" 
      aria-describedby="button-addon2" 
      v-model="novoNome.nome" 
    />
    <button class="btn btn-primary" @click="salvarProduto()">Adicionar</button>
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
            <input 
              class="form-check-input" 
              type="checkbox" 
              v-model="produto.done" 
              :id="'defaultCheck' + index"
            />
          </td>
          <td :class="{ 'text-decoration-line-through': produto.done }">{{ produto.nome }}</td>
          <td>
            <button class="fs-5" @click="removerProduto(produto.nome)">
              <i class="bi bi-trash3-fill"></i> 
            </button> 
            <button class="fs-5" @click="alterarProduto(produto)">
              <i class="bi bi-pen"></i> 
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,  onMounted  } from 'vue';
import IRelacaoProdutos from '@/interface/IRelacaoProdutos';
import IProduto from '@/interface/IProduto';

export default defineComponent({
  name: "AppPesquisaProdutos",
  setup() {
    const produtos = ref<IRelacaoProdutos[]>([]);
    const novoNome = ref<IRelacaoProdutos>({
      id:0,
      nome: "",
      done: false
    });

    const setLocalStorage = (produtos: IRelacaoProdutos[]) => {
      localStorage.setItem('produtos', JSON.stringify(produtos));
    };

    const getLocalStorage = () => {
      const produtosArmazenados = localStorage.getItem('produtos');
      return produtosArmazenados ? JSON.parse(produtosArmazenados) : [];
    };

    const salvarProduto = () => {
      const { id, nome, done } = novoNome.value;

      let produtoExistente = produtos.value.find(prod => prod.id === id);

      if (!produtoExistente) {
        const novoProduto: IRelacaoProdutos = {
          id: produtos.value.length + 1, 
          nome: nome.trim(),
          done: done
        };
        produtos.value.push(novoProduto);
      } else {
        produtoExistente.nome = nome.trim();
        produtoExistente.done = done;
      }

      setLocalStorage(produtos.value);

      novoNome.value = {
        id: 0,
        nome: "",
        done: false
      };
    };

    const removerProduto = (nome: string) => {
      produtos.value = produtos.value.filter(prod => prod.nome !== nome);
      setLocalStorage(produtos.value)
    };

    const alterarProduto = (produto: IRelacaoProdutos) => {
      novoNome.value = { ...produto }; 
    };

    onMounted(() => {
      produtos.value = getLocalStorage();
    });

    return {
      produtos,
      novoNome,
      removerProduto,
      alterarProduto,
      salvarProduto
    };

  }
});
</script>
