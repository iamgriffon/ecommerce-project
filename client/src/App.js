import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';  
import {connect} from 'react-redux';
import {GlobalStyles} from './global-styles';

import Header from './Components/header/header.component';
import Spinner from './Components/spinner/spinner-component';
// import { addCollectionItemsAndDocuments } from './redux/shop/shop-selectors' para importar o método

import {selectCurrentUser} from './redux/user/user-selectors';
import {selectCollectionsForPreview} from './redux/shop/shop-selectors'
import {createStructuredSelector} from 'reselect'
import { checkUserSession } from './redux/user/user-actions';
import ErrorBoundary from './Components/error-boundary/error-boundary-component';


const HomePage = lazy(() => import('./Pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./Pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./Pages/checkout/checkout.component'));
const LoginAndRegisterPage = lazy(() => import('./Pages/login-and-register/login-and-register.component'));


const App = ({ checkUserSession, currentUser }) => {
useEffect(() => {
  checkUserSession()
}, [checkUserSession]);
      // addCollectionItemsAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
      //This will set a method that will add the collection items to the database

    return (
      <div>
        <GlobalStyles />
        <Header/>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={() =>
                  currentUser ? (
                    <Redirect to='/' />
                  ) : (
                    <LoginAndRegisterPage />
                  )}
                />
              </Suspense>
            </ErrorBoundary>
          </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);