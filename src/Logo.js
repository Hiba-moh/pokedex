import React from 'react';



const Logo = props => {
  console.log (props);
  return (
    <header>
      <h1>Welcome to the Pokedex {props.AppName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="cartoon birdie"
        onClick={props.handleClick}
      />
    </header>
  );
};

export default Logo;
