import React from 'react'

const BestPokemon = (props) => {

  return (
    <div>
      <p>
        My Favourite Pokemon Is Anything
      </p>
      <ul>
        {props.NameLists.map ((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;