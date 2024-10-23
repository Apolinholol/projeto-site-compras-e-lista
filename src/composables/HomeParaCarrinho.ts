// composables/useCarrinho.ts
import { ref } from 'vue';
import IProduto from '@/interface/IProduto';

const produtosCarrinho = ref<IProduto[]>([]);

export function useCarrinho() {
  const adicionarAoCarrinho = (produto: IProduto) => {
    produtosCarrinho.value.push(produto);
    console.log('Produto adicionado ao carrinho:', produto);
    console.log('Estado atual do carrinho:', produtosCarrinho.value);
    console.log('Produto sendo adicionado:', produto);
    useCarrinho().adicionarAoCarrinho(produto);
  };

  return {
    produtosCarrinho,
    adicionarAoCarrinho
  };
}