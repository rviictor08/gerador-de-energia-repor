import React from 'react';
import { useEffect, useState } from "react";
import { House, MoonStars, SunDim ,TreeEvergreen} from "phosphor-react";
import './energia.css'
<link href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap" rel="stylesheet"></link>


const KWH = 1.57;
function CasaGerador() {
    const [hour, setHour] = useState(6);
  const [isActive, setIsActive] = useState(false);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setHour(hour + 1);
    }, 1000);

    if (hour > 23) {
      setHour(0);
    }

    return () => clearInterval(interval);
  }, [hour]);

  useEffect(() => {
    if (hour > 5 && hour < 19) {
      setIsActive(true);
      setEnergy(energy + KWH);
    } else {
      setIsActive(false);
    }

    if (hour === 24) {
      setEnergy(0);
    }
  }, [hour]);

return (
  <div class="divisao">
  <h1>GERADOR DE ENERGIA SOLAR</h1>
  <h2>Horario do dia: {hour}h </h2>
  {isActive?<SunDim size={120} height="100px" color="#ecbe13" weight="thin"/>:<MoonStars size={120} color="#5191c1" height="100px" weight="thin" />}
  <div >
  <House size={120} height="100px" color="#bd1b43" weight="thin" />
  <TreeEvergreen class="casa-arvore" size={120} color="#9fd86b" weight="thin" />
  <p>Quanto de energia esta sendo gerada = {energy.toFixed(2)}</p>
  </div>
  </div>
);
}  

export default CasaGerador;