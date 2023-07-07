import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'



function App() {


  const manejarClic = () =>{
    console.log('Clic');
  }

  const reiniciarContador = ()=>{
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <h1 className='titulo'>Contado de Clics</h1>
        <div className='contenedor-principal'>
          <Contador numeroClics='5' />
          <Boton
            texto ='Clic'
            esBotonDeCic={true}
            manejarClic={manejarClic} />

          <Boton
            texto ='Reiniciar'
            esBotonDeCic={false}
            manejarClic={reiniciarContador} />
        </div>
    </div>
  );
}

export default App;
