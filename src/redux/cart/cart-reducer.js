 //O reducer é um switch (select case) que determina o tipo de ação que será disparado no estado
 //Se algo será feito com um determinado tipo de propriedade do estado, ele normalmente terá 2 parametros
 //State.<atributo a ser mudado> e payload (atividade a ser disparada)
 //Para payloads complexos, é necesário criar uma function a parte em UTILS.
 //Os CASES são os TYPES usado no arquivo TYPES.

import CartActionTypes from './cart-types';
import {addItemToCart, removeItemFromCart} from './cart-utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

      case CartActionTypes.ADD_CART_ITEM:
          return {
              ...state,
              cartItems: addItemToCart(state.cartItems, action.payload) //Pq vai manter os itens anteriores e vai aplicar o setState
          };

      case CartActionTypes.DELETE_CART_ITEM:
        return {
          ...state,
          cartItems: state.cartItems.filter(cartItem => 
            cartItem.id !== action.payload.id)
        };

      case CartActionTypes.REMOVE_CART_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
    default:
      return state;
  }
};

export default cartReducer;