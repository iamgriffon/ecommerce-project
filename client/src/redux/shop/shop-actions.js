import ShopActionTypes from './shop-types';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START, 
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailed = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILED,
  payload: errorMessage
})