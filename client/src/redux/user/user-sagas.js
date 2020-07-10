import { takeLatest, all, call, put } from 'redux-saga/effects';
import UserActionTypes from './user-types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils'
import { signInSuccess, signInFailed, signOutSuccess, signOutFailed, signUpSuccess, signUpFailed } from './user-actions';

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
    const {user} = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailed(error));
  }
};
export function* checkUserSession(){
  try {
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailed(error))
  }
};
export function* signOut(){
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield alert('Please come back again anytime!');
  } catch (error) {
    yield put(signOutFailed(error))
  }
};
export function* signUp({payload: {email, password, displayName}}){
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({user, addionalData: {displayName}}))
  } catch (error) {
    yield put(signUpFailed(error))
    yield alert(error.message);
  }
};
export function* signInAfterSignUp({payload: {user, addionalData}}){
  yield getSnapshotFromUserAuth(user, addionalData);
};
export function* onGoogleSignInStart(){
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
};
export function* onEmailSignInStart(){
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
};
export function* onCheckUserSession(){
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession);
}
export function* onSignOutStart(){
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
};
export function* onSignUpStart(){
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}
export function* onSignUpSuccess(){
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signUpSuccess)
} 
export function* userSagas(){
  yield all([
    call(onGoogleSignInStart), 
    call(onEmailSignInStart), 
    call(checkUserSession), 
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)]);
};
