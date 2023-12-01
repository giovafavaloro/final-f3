import { React, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { ContextGlobal } from "../Components/utils/global.context"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { dentistState, dentistDispatch } = useContext(ContextGlobal);

  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => dentistDispatch({ type: "SET_DENTIST", payload: data }));
  }, [])

  const dentist = dentistState?.dentist;

  return (
    <>
      <h1>Detail Dentist {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          <tr className='tbl'>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail