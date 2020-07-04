import { takeLatest, all, call, put } from 'redux-saga/effects';
import UserActionTypes from './user-types';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils'
import { googleSignInSuccess, googleSignInFailed } from './user-actions';

export function* signInWithGoogle(){
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = userRef.get();
    yield put(googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data}));
} catch (error) {
    yield put(googleSignInFailed(error));
  }
}

export function* onGoogleSignInStart(){
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};

export function* userSagas(){
  yield all([call(onGoogleSignInStart)]);
}
