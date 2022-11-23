// import logo from './logo.svg';
import './App.css';
import Image from './Image';
import cat from './cat.jpg'; 

function App() {
  return (
    <Image source={ cat } alternativeText='Cute cat staring' />
    );
}

export default App;
