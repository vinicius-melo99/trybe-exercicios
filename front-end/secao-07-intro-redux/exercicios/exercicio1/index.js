import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";

const NEXT_COLOR = 'NEXT_COLOR'; 
const PREVIOUS_COLOR = 'PREVIOUS_COLOR'; 
const RANDOM_COLOR = 'RANDOM_COLOR'; 

const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
}

function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
    const arrayLength = state.colors.length - 1;
    switch(action.type){
        case 'NEXT_COLOR':
            return { ...state, index: state.index === arrayLength ? 0 : state.index += 1 };
        case 'PREVIOUS_COLOR':
            return { ...state, index: state.index === 0 ? arrayLength : state.index -= 1 };
        case 'RANDOM_COLOR':
            state.colors.push(criarCor());
            const newIndex = state.colors.length - 1
            return { ...state, index: newIndex };
        default:
            return state;
        
    }
}

const store = createStore(reducer, composeWithDevTools());

const actionNextColor = () => store.dispatch({ type: NEXT_COLOR });
const actionPreviousColor = () => store.dispatch({ type: PREVIOUS_COLOR });
const actionRandomColor = () => store.dispatch({ type: RANDOM_COLOR });

const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const randomBtn = document.getElementById('random');

previousBtn.addEventListener('click', () => {
    actionPreviousColor();
});

nextBtn.addEventListener('click', () => {
    actionNextColor();
});

randomBtn.addEventListener('click', () => {
    actionRandomColor();
});

store.subscribe(() => {
    const { colors, index } = store.getState();
    const currentColor = colors[index];
    const container = document.getElementById('container');
    const value = document.getElementById('value');

    value.innerHTML = currentColor;
    container.style.backgroundColor = currentColor; 

});