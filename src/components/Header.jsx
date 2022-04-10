import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const totalExpense = expenses.length > 0 ? (
      expenses.map((element) => (
        Number(element.value) * Number(element.exchangeRates[element.currency].ask)))
        .reduce((acc, valorAtual) => acc + valorAtual)
    ) : (0);

    return (
      <header>
        <h2 data-testid="email-field">{ email }</h2>
        <p>Despesa total:</p>
        <p>R$</p>
        <p data-testid="total-field">{ totalExpense.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
