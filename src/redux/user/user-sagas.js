import { takeLatest, all, call, put } from 'redux-saga/effects';
import UserActionTypes from './user-types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils'
import { signInSuccess, signInFailed } from './user-actions';

export function* getSnapshotFromUserAuth(userAuth){
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = userRef.get();
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data}));
} catch (error) {
    yield put(signInFailed(error));
  }
};

export function* signInWithGoogle(){
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailed(error))  
  }
};

export function* signInWithEmail({payload: {email, password}}){
  try {
    const user = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailed(error));
  }
};

export function* onGoogleSignInStart(){
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* onEmailSignInStart(){
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};

export function* userSagas(){
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
};
