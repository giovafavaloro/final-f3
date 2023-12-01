import { React, useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showOk, setShowOk] = useState(false)
  const [showErr, setShowErr] = useState(false)

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //Validacion regex 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length < 6 || !email.match(validRegex)) {
      setShowOk(false)
      setShowErr(true)
    } else {
      setShowOk(true)
      setShowErr(false)
    }
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Full name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={handleSubmit}>Send</button>
      </form>
      { showErr && <h6>Por favor verifique su información nuevamente...</h6> }
      { showOk && <h4>Gracias {name}, te contactaremos cuanto antes vía mail.</h4> }
    </div>
  );
};

export default Form;
