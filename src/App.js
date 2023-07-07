import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState }  from 'react';



function App() {

  const [numeroClics, setNumeroClics] = useState(0); 

  const manejarClic = () =>{
    setNumeroClics(numeroClics + 1);
  }

  const reiniciarContador = ()=>{
    setNumeroClics(0);
  }

  return (
    <div className="App">
      <h1 className='titulo'>Contado de Clics</h1>
        <div className='contenedor-principal'>
          <Contador numeroClics={numeroClics} />
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
