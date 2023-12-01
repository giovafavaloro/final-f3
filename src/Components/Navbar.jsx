import { React, useContext} from 'react'
import {Link} from "react-router-dom"
import { ContextGlobal } from "./utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { modeState, modeDispatch } = useContext(ContextGlobal);

  const toggleMode = () => {
    modeDispatch({ type: "CHANGE_MODE" });
  };

  return (
    <nav>
      <div>
        <Link to="/"><h4 className='nav-route'>Home</h4></Link>
        <Link to="/contact"><h4 className='nav-route'>Contact</h4></Link>
        <Link to="/favs"><h4 className='nav-route'>Favs</h4></Link>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='nav-btn' onClick={toggleMode}>{modeState.darkMode ? '☀️' : '🌙'}</button>
    </nav>
  )
}

export default Navbar