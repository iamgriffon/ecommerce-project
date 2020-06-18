import React from 'react';
import { Switch, Route } from 'react-router-dom'; //Route é para definir rota, Switch é para o JSX somente carregar aquilo que vier primeiro
import './App.css';
import HomePage from './Components/Pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

//o exact é para tornar o path absoluto, ou seja, só dá para chegar nele se for NAQUELE path.
//O switch vai fazer o segunte, ele só vai carregar a página se o path bater exatamente com aquele proposto.
//Sem ele, ao digitarmos /hats, ele carrega tanto a loading page, quanto a HatsPage