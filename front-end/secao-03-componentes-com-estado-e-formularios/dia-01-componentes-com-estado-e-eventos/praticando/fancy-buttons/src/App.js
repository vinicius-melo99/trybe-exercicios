import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      clicks: 0
    }
  }

  handleClick(){
    this.state.clicks % 2 === 0 ? console.log('green') : console.log('red');
    
    this.setState((previousState, _props) => ({
      clicks: previousState.clicks + 1,
    }));
  }

  render() {
    return <button onClick={this.handleClick} style={{backgroundColor: this.state.clicks % 2 === 0 ? 'green' : 'red'}}> {this.state.clicks}</button>
  }
}

export default App;