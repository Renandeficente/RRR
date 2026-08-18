import { createContext, useContext, useState, useEffect } from 'react';
import { getCart, saveCart, getOrders, saveOrders } from '../utils/cart';

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {

  const [itens, setItens] = useState(() => getCart());

  useEffect(() => {
    saveCart(itens);
  }, [itens]);

  const [pedidos, setPedidos] = useState(() => getOrders());

  useEffect(() => {
    saveOrders(pedidos);
  }, [pedidos]);

  function adicionarItem(produto) {
    setItens((prev) => {
      const jaexiste = prev.find((item) => item.id === produto.id);
      if (jaexiste) {
        return prev.map((item) =>
          item.id === produto.id ? { ...item, quantidade: (item.quantidade || item.qty || 1) + 1 } : item
        );
      }
      return [...prev, {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco ?? produto.price ?? 0,
        img: produto.img,
        quantidade: 1,
      }];
    });
  }

  function removerItem(id) {
    setItens((prev) => prev.filter((item) => item.id !== id));
  }

  function totalitens() {
    return itens.reduce((acc, item) => acc + (item.quantidade || item.qty || 1), 0);
  }

  function finalizarCompra() {
    if (itens.length === 0) return null;

    const total = itens.reduce((acc, item) => {
      const valor = item.preco ?? item.price ?? 0;
      const qtd = item.quantidade || item.qty || 1;
      return acc + valor * qtd;
    }, 0);

    const novopedido = {
      id: Date.now(),
      date: new Date().toLocaleString('pt-BR'),
      itens: itens.map((item) => ({ ...item, quantidade: item.quantidade || item.qty || 1 })),
      total,
    };

    setPedidos((prev) => [...prev, novopedido]);
    setItens([]);
    return novopedido;
  }

  return (
    <CarrinhoContext.Provider value={{ itens, pedidos, adicionarItem, removerItem, totalitens, finalizarCompra }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
