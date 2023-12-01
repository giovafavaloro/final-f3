import { React, useContext, useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistState} = useContext(ContextGlobal);
  const dentists = dentistState.dentistsList;

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        { dentists.map(dentist => <Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username}/>) }
      </div>
    </main>
  )
}

export default Home