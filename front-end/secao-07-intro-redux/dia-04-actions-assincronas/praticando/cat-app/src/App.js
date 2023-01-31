import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { requestCatApi } from './redux/actions';

class App extends Component{
  render() {
    let { isFetching, cat, dispatch } = this.props;
    if(isFetching) return <p>Carregando...</p>;

    return(
      <>
        <button
          onClick={ () => dispatch(requestCatApi()) }
        >
          Gato aleatório
        </button>
        {cat && 
          <img src={ cat } alt='bichano'/>
        }
      </>
    )
  }
}

const mapStateToProps = ({ isFetching, cat }) => ({
  isFetching,
  cat
})

export default connect(mapStateToProps)(App);
