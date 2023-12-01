import { React, useContext, useState, useEffect } from 'react'
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {dentistState} = useContext(ContextGlobal);
  const favs = dentistState.favList;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        { favs.map(fav => <Card key={fav.id} id={fav.id} name={fav.name} username={fav.username}/>) }
      </div>
    </>
  );
};

export default Favs;
