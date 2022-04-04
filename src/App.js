import React from 'react';
import { Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Login />
      <Wallet />
    </Switch>
  );
}

export default App;
