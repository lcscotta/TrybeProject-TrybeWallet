// import user from './user';
// import wallet from './wallet';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
// import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import store from './store';
import App from '../App';
// import reducer from '../reducers';
// api: <https://economia.awesomeapi.com.br/json/all>

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

class indexApp extends React.Component {
  constructor() {
    super();
    const store = createStore(
      reducer,
      composeWithDevTools(
        applyMiddleware(thunk),
      ),
    ); // Fim da variável store
  } // Fim do constructor

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
