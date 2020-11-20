import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import React, { useState } from 'react';

const App = () => {

  const [ usernameState, setUsername ] = useState({
    username: 'bruce.dickinson'
  });

  const changeUsername = (event) => {
    setUsername({username: event.target.value});
  }

  return (
    <div className="App">
      <UserOutput username={usernameState.username}></UserOutput>
      <UserOutput username={usernameState.username}></UserOutput>
      <UserOutput username={usernameState.username}></UserOutput>

      <UserInput change={changeUsername} username={usernameState.username}></UserInput>
    </div>
  );
}

export default App;
