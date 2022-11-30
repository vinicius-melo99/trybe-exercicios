import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.handleUser = this.handleUser.bind(this);
    this.state = {
      usuario: '',
    }
  }

  handleUser({ target: { value } }) {
    this.setState({
      usuario: value
    })
  }
  
  render() {
  
    return (
    <div>
      <h1>Criando componente controlado</h1>
      <form >
        <select>
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>
        <input type='text' value={this.state.usuario} onChange={this.handleUser} />
        <input type='email' />
        <textarea></textarea>
      </form>
    </div>
  );
  }
}

export default App;
