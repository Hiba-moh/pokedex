
import React,{ useState } from 'react';

const CaughtPokemon = () => {
    const [caught, setCaught] = useState (['jan','feb','mar']);
let randomPokemon = Math.floor(Math.random()*caught.length);
function catchPokemon(){
setCaught(caught.concat(caught[randomPokemon]));
}
  const date = new Date ().toLocaleDateString ();

  return (
      <div>
    <p>Caught {caught.length} Pokemon on {date}</p>
    <button onClick={catchPokemon}>Click </button>
    <ul>
{caught.map(function(item,index){
        return <li key={index}>{item}</li>;
    })}

    </ul>
    </div>
    );
}

export default CaughtPokemon