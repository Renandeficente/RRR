import { addToCart, cartTotal, clearCart, getCart } from './cart';

beforeEach(() => { //Está executando antes do teste
  localStorage.clear();// Está limpando o localStorage antes de cada teste
});

test('adiciona produto e calcula total', () => { //Está criando um produto para adicionar ao carrinho.
  const product = { id: 1, nome: 'Mouse', preco: 100, img: 'mouse.png' };//Está adicionado o produto ao carrinho

  addToCart(product, 2);//A quantidade de produtos que está sendo adicionada ao carrinho é 2 Erick   .



  expect(getCart()).toEqual([{ id: 1, nome: 'Mouse', price: 100, img: 'mouse.png', qty: 2 }]); // Está verificando a quantidade de produtos no carrinho .
  expect(cartTotal()).toBe(200);//E após fazendo o valor total.
});

test('limpa o carrinho', () => { //Está limpando o carrinho 
  const product = { id: 1, nome: 'Mouse', preco: 100, img: 'mouse.png' };

  addToCart(product, 1);
  clearCart();//E verificando se está vazio

  expect(getCart()).toEqual([]);
});