import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const button = document.querySelector('button');
const counter = document.querySelector('h2');

const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, { type }) => {
   
   if(type === 'INCREMENT_COUNTER'){
        return { count: state.count += 1 }
   }
    return state
};

const store = createStore(reducer, composeWithDevTools());

const action = {type: 'INCREMENT_COUNTER'};

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

button.addEventListener('click', () => {
    store.dispatch(action);
});

store.subscribe(() => {
    const { count } = store.getState();
      
    counter.innerHTML = count;
})