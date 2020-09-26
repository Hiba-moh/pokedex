import React from 'react';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon'


 

const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];


const App = () => {
 
  const logWhenClicked = () => {
  console.log (`it doesn't matter what the message is`);
};

 return (
  <div>
    <Logo AppName="Pokedex" handleClick={logWhenClicked} />
    <BestPokemon NameLists = {abilities}/>
    <CaughtPokemon />
  </div>
)};



export default App;


