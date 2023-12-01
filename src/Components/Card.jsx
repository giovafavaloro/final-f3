import { React, useContext, useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { ContextGlobal } from "../Components/utils/global.context"

const Card = ({ name, username, id }) => {
  const { dentistState, dentistDispatch } = useContext(ContextGlobal);

  const fav = dentistState.favList.find((fav) => fav.id === id);

  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    e.stopPropagation();
    if (fav != null) {
      dentistDispatch({ type: "DEL_FAV", payload: id });
    } else {
      dentistDispatch({ type: "ADD_FAV", payload: { name, username, id } });
    }
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt='img-dentist' className="images" />
        <Link to={"/detail/" + id}>
          <h4 className='card-text-main'>{name}</h4>
        </Link>
        <h6 className='card-text'>{username}</h6>
        <h6 className='card-text'>ID: {id}</h6>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{fav ? "Remove fav" : "Add fav"}</button>
    </div>
  );
};

export default Card;
