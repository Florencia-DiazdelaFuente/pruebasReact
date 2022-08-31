import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

// const productos = [
//   {id: 1, nombre: "coca", precio: "200"},
//   {id: 2, nombre: "pepsi", precio: "180"},
//   {id: 3, nombre: "sprite", precio: "190"}
// ]

const SuperForm = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

function App() {
  
  return (
    <div> 
      <Header />
      <SuperForm title="hola que tal" />
      {/* <ul>
        {
          productos.map(item =>(
            <li key={item.id}>{item.nombre} - $ {item.precio}</li>
          ))
        }
      </ul> */}

      <Footer pie="The Bike Store" redes="Facebook, Twitter, Instagram"/>
        </div>
  );
}

export default App;
