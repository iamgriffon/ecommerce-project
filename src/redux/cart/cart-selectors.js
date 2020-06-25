//SELECTORS SÃO SELETORES DE PROPRIEDADES ESPECÍFICAS DO OBJETO, COMO POR EXEMPLO PREÇO DE PRODUTOS, QUANTIDADE ETC.

import {createSelector} from 'reselect';

const selectCart = state => state.cart; //Ele "aponta" para o estado em questão, afim de operar sobre suas propriedades

export const selectCartItems = createSelector( //Ele seleciona todos os produtos que estão na propriedade cartItems
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector( //Seleciona a propriedade "hidden" do state
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector( //Pega todos os atributos "quantity" de cartItems e os soma numericamente
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector( //Ele vai pegar todos os atributos "Price" e os "Quantity" e os multiplica para todos os produtos
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
)