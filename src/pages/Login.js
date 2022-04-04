import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userAction } from '../actions';

// this.state = {
//   btnDisabler: true,
//   emailOk: true,
//   passwordOk: true,
//   inputEmail: '',
//   inputPassword: '',
// }; // Fim do state

function ultimateValidator(email, password, func) {
  // Validador de emails, senhas, etc.
  const minValue = 6;
  const passValid = password.lenght >= minValue;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const inputs = [passValid, emailValid];
  const validadeInputs = inputs.every((input) => input === true);
  if (validadeInputs) func(false);
}

function Login(props) {
  // Função de Login que engloba tudo e retorna a pagina funfando.
  const [email, inputEmail] = useState('');
  const [password, inputPassword] = useState('');
  const [btnDisabler, setIsDisabled] = useState(true);
  const history = useHistory();
  const direction = false;

  useEffect(() => {
    ultimateValidator(email, password, setIsDisabled);
  }, [email, password]);

  function handleClick() {
  // Função que muda rota para /carteira após clicar em entrar
    const { dispatch } = props;
    dispatch(userAction(email));
    history.push('/carteira');
  }

  return (
    <div data-testid="page-login">
      Email:
      <input
        type="email"
        id="email"
        data-testid="email-input"
        name="email"
        value={ email }
        onChange={ (e) => inputEmail(e.target.value) }
      />

      Senha:
      <input
        type="password"
        id="password"
        data-testid="password-input"
        name="password"
        value={ password }
        onChange={ (e) => inputPassword(e.target.value) }
      />

      <button
        type="button"
        disabled={ btnDisabler }
        onClick={ () => handleClick() }
      >
        Entrar
      </button>
      (!direction :
      {' '}
      <Redirect to="/carteira" />
      )
    </div>
  );
} // Fim do Login

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
