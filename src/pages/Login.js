import React from 'react';
import PropTypes from 'prop-types';
import { connect, Link } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      btnDisabler: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.ultimateValidator = this.ultimateValidator.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.ultimateValidator());
  }

  ultimateValidator() {
  // Função ultimate validadora de tudo porque sem condições, se não der certo *inserir voz do Gringh* ah eu não vou!
    const { email, senha } = this.state;
    const emailValido = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    const minValue = 6;
    const passValid = senha.length >= minValue;
    const emailValidado = email.length > 0 && emailValido.test(email);

    if (emailValidado && passValid) {
      this.setState({ btnDisabler: true });
    } else {
      this.setState({ btnDisabler: false });
    }
  }

  render() {
    const { email, senha, btnDisabler } = this.state;
    const { history, addUser } = this.props;
    return (
      <div>
        <form>
          <h1>Login</h1>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              data-testid="email-input"
              name="email"
              value={ email }
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              name="password"
              value={ senha }
              placeholder="Senha"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ btnDisabler }
            onClick={ () => { addUser(email); history.push('/carteira'); } }
          >
            Entrar
          </button>
          <Link to="/carteira">Wallet</Link>
        </form>
      </div>
    );
  }
} // Fim do Login

Login.propTypes = {
  addUser: PropTypes.func,
  history: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addUser: (payload) => dispatch(userAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
