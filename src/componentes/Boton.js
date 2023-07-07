import React from 'react';
import '../styleSheets/Boton.css'


function Boton({ texto, esBotonDeCic, manejarClic }){
	return(
		<button 
			className={esBotonDeCic ? 'boton-clic' : 'boton-reiniciar'}
			onClick={manejarClic}>
			{texto}
		</button>
	)
}

export default Boton;