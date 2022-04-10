import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import { fetchCoins } from '../actions/index';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const { fetchCoinsDispatch } = this.props;
    fetchCoinsDispatch();
  }

  handleEdit() {
    this.setState((prevState) => ({ edit: !prevState.edit }));
  }

  render() {
    const { edit } = this.state;
    return (
      <div>
        <Header />
        { edit ? <Form
          handleEdit={ this.handleEdit }
        /> : <Form /> }
        <Expenses handleEdit={ this.handleEdit } />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCoinsDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsDispatch: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
