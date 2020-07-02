import ShopActionTypes from './shop-types';
import { firestore, convertCollectionSnaphotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START, 
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());

    collectionRef.get().then(snapshop => {
      const collectionsMap = convertCollectionSnaphotToMap(snapshop);
      dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(error => dispatch(fetchCollectionsFailed(error)));
  }
}

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailed = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILED,
  payload: errorMessage
})