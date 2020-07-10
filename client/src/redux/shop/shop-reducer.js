import ShopActionTypes from './shop-types';
//ACTION === JavaScript Object
//Payload = conteúdo da action

const INITIAL_STATE = {
    collections: null,
    loading: false,
    errorMessage: undefined,
};

const shopReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
      case ShopActionTypes.FETCH_COLLECTIONS_START:
        return {
          ...state,
          loading: true
        }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
          return {
            ...state,
            loading: false,
            collections: action.payload
          }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILED:
          return {
            ...state,
            loading: false,
            errorMessage: action.payload
          }
        default:
            return state;
    }
}

export default shopReducer