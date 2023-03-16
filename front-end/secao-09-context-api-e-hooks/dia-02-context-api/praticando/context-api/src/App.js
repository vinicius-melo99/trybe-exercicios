// /src/App.js

import ThemeContext from './context/ThemeContext';
import Footer from './Components/Footer';
// ...

export default function App() {
  return (
    <ThemeContext.Provider value={{ color: 'dark' }}>
      <div>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
