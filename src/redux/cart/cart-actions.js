//ACTIONS VÃO "CONVERTER" os REDUCERS em FUNCTIONS para serem utilizadas nos componentes.

import CartActionTypes from './cart-types';

export const toggleCartHidden = () => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
})

export const deleteItem = item => ({
    type: CartActionTypes.DELETE_CART_ITEM,
    payload: item
})