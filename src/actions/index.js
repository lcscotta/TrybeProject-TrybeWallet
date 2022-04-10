export const userAction = (payload) => ({
  type: 'USER_ACTION', payload });
export const addExpenseAction = (payload) => ({
  type: 'ADD_EXPENSE_ACTION', payload });
export const editAction = (id, exchangeRates) => ({
  type: 'EDIT_ACTION',
  id,
  exchangeRates,
});
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const changeEditAction = (payload) => ({
  type: 'CHANGE_EDIT_ACTION', payload });

const REQUEST_COINS = 'REQUEST_COINS';
const RECEIVE_COINS = 'RECEIVE_COINS';
const FAILED_REQUEST = 'FAILED_REQUEST';

const requestCoins = () => ({
  type: REQUEST_COINS });

const receiveCoins = (payload) => ({
  type: RECEIVE_COINS,
  payload });

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error });

export const deleteAct = (id) => ({ type: DELETE_EXPENSES, payload: id });

export function fetchCoins() {
  return async (dispatch) => {
    dispatch(requestCoins());
    try {
      const resolve = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await resolve.json();
      const arrayData = Object.keys(data);
      const filteredData = arrayData.filter((coin) => coin !== 'USDT');
      dispatch(receiveCoins(filteredData));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}

const REQUEST_EXCHANGE = 'REQUEST_EXCHANGE';
const RECEIVE_EXCHANGE = 'RECEIVE_EXCHANGE';
const FAILED_REQUEST_EXCHANGE = 'FAILED_REQUEST_EXCHANGE';

const requestExchange = () => ({
  type: REQUEST_EXCHANGE });

const receiveExchange = (payload) => ({
  type: RECEIVE_EXCHANGE,
  payload });

const failedRequestExchange = (error) => ({
  type: FAILED_REQUEST_EXCHANGE,
  payload: error });

export function fetchExchange(expenses) {
  return async (dispatch) => {
    dispatch(requestExchange());
    try {
      const resolve = await fetch('https://economia.awesomeapi.com.br/json/all');
      const exchangeRates = await resolve.json();
      const addExchange = { ...expenses, exchangeRates };
      dispatch(receiveExchange(addExchange));
    } catch (error) {
      dispatch(failedRequestExchange(error));
    }
  };
}
