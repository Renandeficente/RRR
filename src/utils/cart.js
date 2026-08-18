// Simple cart utilities using localStorage
const CART_KEY = 'magazine_cart_v1';
const ORDERS_KEY = 'magazine_orders_v1';

export function getCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}

export function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product, qty = 1){
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === product.id);
  if(idx >= 0){
    cart[idx].qty += qty;
  } else {
    cart.push({ id: product.id, nome: product.nome, price: product.preco, img: product.img, qty });
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(id){
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  return cart;
}

export function updateQuantity(id, qty){
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if(idx >= 0){
    cart[idx].qty = Math.max(0, qty);
    if(cart[idx].qty === 0) cart.splice(idx,1);
  }
  saveCart(cart);
  return cart;
}

export function clearCart(){ saveCart([]); }

export function getOrders(){
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveOrders(orders){
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export function cartTotal(){
  return getCart().reduce((s,i)=> s + i.price * i.qty, 0);
}

export default { getCart, saveCart, addToCart, removeFromCart, updateQuantity, clearCart, getOrders, saveOrders, cartTotal };
