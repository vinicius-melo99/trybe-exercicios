import React, { Component } from "react";
import { requestCharactersApi } from "../redux/actions";
import { connect } from "react-redux";

class Home extends Component{
  constructor(){
    super();
    this.state = {
        characterInput: ''
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
        [name]: value
    })
  }

  handleClick = () => {
    const { characterInput } = this.state;
    const { dispatch } = this.props;
    // console.log('clicou');
    dispatch(requestCharactersApi(characterInput));
  }

  render(){
    const { characterInput } = this.state;
    const {
        name,
        gender,
        culture,
        born,
        titles,
        isFetching,
        notFound,
        error
    } = this.props
    
    if(isFetching) return <h2>Loading...</h2>;
    if(error) return <h1>Error 500: { error }</h1>

    return(
      <div>
            <input 
            name='characterInput' 
            type='text' 
            value={ characterInput }
            onChange={ this.handleInput }
            />
            <button onClick={ this.handleClick }>
                Procurar
            </button>
            {notFound ? <p>Character not Found.</p> : 
                <div>
                    <h2>{ name }</h2>
                    <h3>{ gender }</h3>
                    <p>{ culture }</p>
                    <p>{ born }</p>
                    <ul>
                        {titles.map( (title) => {
                            return <li>{ title }</li>
                        })}
                    </ul>
                </div> 
            }
      </div>
    );
  }
}

const mapStateToProps = (globalState) => {
    const { 
    name,
    gender,
    culture,
    born,
    titles,
    isFetching,
    notFound,
    error } = globalState

    return {
        name,
        gender,
        culture,
        born,
        titles,
        isFetching,
        notFound,
        error
    }
}

export default connect(mapStateToProps)(Home);