import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      btnDisabler: true,
      emailOk: true,
      passwordOk: true,
      inputEmail: '',
      inputPassword: '',
    }; // Fim do state

    function ultimateValidator({ target: value, name }) {
      // Validador de emails, senhas, etc.
      const minValue = 6;
      const passValid = inputPassword.lenght >= minValue;
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
      const { passwordOk, emailOk } = this.state;

      if (name === 'email') {
        this.setState({ inputEmail: value });
        if (value.match(ultimateValidator)) {
          this.setState({ emailOk: true });
        } else {
          this.setState({ emailOk: false });
        }
      }
    } // Fim da função
  } // Fim do Constructor

  render() {
    return (
      <div data-testid="page-login">
        Login
        <button type="button">Entrar</button>
        {/* <Redirect to="/carteira" /> */}
      </div>
    );
  }
}

// - Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:
//   - O email está no formato válido, como 'alguem@alguem.com'.
//   - A senha possui 6 ou mais caracteres.
// - Salve o email no estado da aplicação, com a chave **_email_**, assim que a pessoa usuária logar.
// - A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

export default Login;
