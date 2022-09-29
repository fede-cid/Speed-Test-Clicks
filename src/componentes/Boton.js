import React from "react";
import '../hojas-de-estilos/Boton.css'


function Boton({ texto, botonClick, manejarClick}){
    return (
<button className={ botonClick ? 'boton-clic' : 'boton-reiniciar' } onClick={ manejarClick }>
{ texto }
</button>
    );
}

export default Boton;