// import user from './user';
// import wallet from './wallet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// lembrar de incluir o Provider ali em cima, quando usar.
import React from 'react';
import Login from '../pages/Login';
// import PropTypes from 'prop-types';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import reducer from '../reducers';
// api: <https://economia.awesomeapi.com.br/json/all>

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

class indexApp extends React.Component {
  // Dentro daqui só passa as rotas e uso o browserRouter. NÃO MEXER!
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
          >
            <Login />
          </Route>
        </Switch>
      </BrowserRouter> // Fim do elemento pai BrowserRouter
    ); // Fim do return
  } // Fim do render
} // Fim do componente

export default indexApp;
