import React from 'react';
import { Switch, Route } from 'react-router-dom'; //Route é para definir rota, Switch é para o JSX somente carregar aquilo que vier primeiro
import './App.css';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import LoginAndRegisterPage from './Pages/login-and-register/login-and-register.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null,
      SameSite: null
    }
  }
  unSubscribeFromAuth = null;

  componentDidMount(){ //muda o estado da autenticação
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //o parametro devolvido vai ser tratado como user
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => { 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      } else {
        this.setState({currentUser: userAuth}) //Se não existir, joga pra null (que é o padrão)
      };

      // console.log(user); //Pra dar uma olhada
      // this.setState({currentUser: user}); //O estado do currentUser será alterado

    })
  }
  
  componentWillUnmount(){ //ele fecha a autenticação para evitar memory leak
  this.unSubscribeFromAuth();
  }

  render(){  
    return(
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={LoginAndRegisterPage} />

      </Switch>
    </div>
  );
}}

export default App;

//o exact é para tornar o path absoluto, ou seja, só dá para chegar nele se for NAQUELE path.
//O switch vai fazer o segunte, ele só vai carregar a página se o path bater exatamente com aquele proposto.
//Sem ele, ao digitarmos /hats, ele carrega tanto a loading page, quanto a HatsPage
