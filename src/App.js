import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';  
import {connect} from 'react-redux';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import LoginAndRegisterPage from './Pages/login-and-register/login-and-register.component';
import CheckoutPage from './Pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
// import { addCollectionItemsAndDocuments } from './redux/shop/shop-selectors' para importar o método


import {setCurrentUser} from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selectors';
import {selectCollectionsForPreview} from './redux/shop/shop-selectors'
import {createStructuredSelector} from 'reselect'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
      // addCollectionItemsAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
      //This will set a method that will add the collection items to the database
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <LoginAndRegisterPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);