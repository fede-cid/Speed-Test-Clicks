import React from "react";
import '../hojas-de-estilos/Contador2.css'

function Contador2({ numClicks }) {
    return (
<div className='contador2'>
 cantidad de clicks en 30 seg :
 <div className='resultados'> { numClicks }</div> 
</div>


    )
}

export default Contador2;