import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';   //Route é para definir rota, Switch é para o JSX somente carregar aquilo que vier primeiro
import {connect} from 'react-redux';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import LoginAndRegisterPage from './Pages/login-and-register/login-and-register.component';
import CheckoutPage from './Pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selectors';
import {createStructuredSelector} from 'reselect'


const mapStateToProps  = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),

});



class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount(){ //muda o estado da autenticação
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //o parametro devolvido vai ser tratado como user
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => { 
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth) //Se não existir, joga pra null (que é o padrão)
      };
    })
  }
  
  componentWillUnmount(){ //ele fecha a autenticação para evitar memory leak
  this.unSubscribeFromAuth();
  }

  render(){  
    const {currentUser} = this.props
    return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route path='/signin' 
        render={()=> 
        currentUser? 
          (<Redirect to='/'/>
          ) : (
          <LoginAndRegisterPage/>
          ) 
        } 
      />

      </Switch>
    </div>
  );
}}



export default connect(mapStateToProps, mapDispatchToProps)(App);

//o exact é para tornar o path absoluto, ou seja, só dá para chegar nele se for NAQUELE path.
//O switch vai fazer o segunte, ele só vai carregar a página se o path bater exatamente com aquele proposto.
//Sem ele, ao digitarmos /hats, ele carrega tanto a loading page, quanto a HatsPage
