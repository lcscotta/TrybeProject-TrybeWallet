import React from 'react';
import { userAction } from '../actions';

// this.state = {
//   btnDisabler: true,
//   emailOk: true,
//   passwordOk: true,
//   inputEmail: '',
//   inputPassword: '',
// }; // Fim do state

class Wallet extends React.Component {
function ultimateValidator() {
  // Validador de emails, senhas, etc.
  const minValue = 6;
  const passValid = inputPassword.lenght >= minValue;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
  const inputs = [passValid, emailValid];
  const validadeInputs = inputs.every((input) => input === true);
  if (validadeInputs) func(false);
}

function handleClick() {
  // Função que muda rota para /carteira após clicar em ENTRAR [criar]
  const { dispatch } = props;
  dispatch(userAction(email));
  history.push('/carteira');
}
//   } // Fim da função
// } // Fim do Constructor

// render() {
return (
  <div data-testid="page-login">
    Email:
    <input
      type="email"
      id="email"
      data-testid="inputEmail"
      name="email"
      value={ email }
      onChange={ (e) => setEmail(e.target.value) }
    />

    Senha:
    <input
      type="password"
      id="password"
      data-testid="inputPassword"
      name="password"
      value={ password }
      onChange={ (e) => setPassword(e.target.value) }
    />
    <button
      type="button"
      disabled={ btnDisabler }
      onClick={ () => handleClick() }
    >
      Entrar
    </button>
  </div>
);
}
export default Login;
