
import './App.css';
//import ButtonComponent from './components/ButtonComponent/ButtonComponent'
import Saludo from './components/Saludo/Saludo';
//import Item from './components/Item/Item';
import Navbar from './components/navbar/Navbar';
import Carrito from './components/Carrito/Carrito';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='navv'>
        <Navbar />
        <Carrito />
        </div>
        <img src='https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Free-Download.png' className="App-logo" alt="logo" />
        <p className="bienvenida">
          Esta es mi tienda de Mangas
        </p>
        <Saludo username='Coder'/>

      </header>
      
    </div>
  );
}

export default App;
