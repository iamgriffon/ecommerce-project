import { takeLatest, put, call, all } from 'redux-saga/effects';
import ShopActionTypes from './shop-types';
import { firestore, convertCollectionSnaphotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailed } from './shop-actions';


export function* fetchCollectionsAsync(){
 try {  
  yield console.log('I am working now niqqa');
  const collectionRef = firestore.collection('collections');
  const snapshot = yield collectionRef.get();
  const collectionsMap = yield call(convertCollectionSnaphotToMap, snapshot);
  yield put(fetchCollectionsSuccess(collectionsMap))
  } catch(error) {
    yield put(fetchCollectionsFailed);
  }
}

export function* fetchCollectionsStart(){
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
export function* shopSagas(){
  yield all([call(fetchCollectionsStart)]);
}
