// import user from './user';
// import wallet from './wallet';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
// import store from './store';
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
        <App />
        <Provider store={ store }>
          <App />
        </Provider>
      </BrowserRouter>,
      document.getElementById('root')
    ); // Fim do return
  } // Fim do render
} // Fim do componente

export default indexApp;
