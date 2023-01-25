import React from 'react';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: 'Tryber',
      role: 'Admin'
    };
  }


  render() {
    return (
      <>
        <h1>Home Page</h1>
        <button
          type='button'
          onClick={() => history.push('/welcome', this.state)}
        >
          Acesse a página de boas-vindas
        </button>
      </>
    );
  }
}

export default Home;
