import React from "react";
import '../hojas-de-estilos/Puntuacion.css'
function Puntuacion({ historial }) {
    return (
<p className='puntuacion'>
  * { historial }
<br/></p>

)
}

export default Puntuacion;