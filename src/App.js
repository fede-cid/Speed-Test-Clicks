
import './App.css';
import Puntuacion from './componentes/Puntuacion'

import Contador from './componentes/Contador';

import Contador2 from './componentes/Contador2';
import Boton from './componentes/Boton';
import speedTestLogo from './imagenes/SpeedTestLogo2.png'
import { useState, useRef } from 'react';

function App() {

  const count = useRef()
  const [historial, setHistorial] = useState([])
  const [numClicks, setNumClicks] = useState(0);
  const setTime = () => {
    setTimeout(() => {
      setHistorial(currentHistorial => currentHistorial.concat(count.current.children[0].innerHTML))
        alert('llegaste a ' + count.current.children[0].innerHTML)
        console.log(historial)
    }, 30000)}

  const manejarClick= () => {
    if(numClicks===0)
    setTime()
    setNumClicks( numClicks + 1);
    if(numClicks>0)
setNumClicks( numClicks + 1);
    
  }
  const reiniciarContador = () => {
    setNumClicks(0)
  }
  return (
    <div className="App">
       <div className='speedtest-logo-contenedor'>
        <img 
        className='speedTest-logo'
        src={speedTestLogo}
        alt='logo de SpeedTest'
        />
       </div>
       <div className='texto'>
<h3 >Bienvenidos a la super Speed Test donde pondremos a prueba la habilidad que tienes para hacer Clicks</h3>
  <h4>Una vez que realices el primer Click el tiempo empezara a correr, tendrás 30 segundos para hacer la mayor cantidad de clicks posibles, ¡¿podras superarme?! <strong>mi record es de 344 clicks ¡te reto</strong>!  </h4>
</div>
       <div className='contenedor-principal' ref={count}>
     
          <Contador numClicks={ numClicks } />
          <Boton 
          texto='click'
          botonClick={true}
          manejarClick={manejarClick}
          />
          <Boton 
          texto='reiniciar'
          botonClick={false}
          manejarClick={reiniciarContador}
          />
         <Contador2 numClicks={ historial.map((a,i) => <Puntuacion historial={a} key={i}/>) } />
       </div>
    </div>
  );
}

export default App;
