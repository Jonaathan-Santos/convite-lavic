import React, { useRef, useState } from 'react'
import Confirmed from './Confirmed'
import Generate from './Generate'
import Login from './Login'

function Admin() {
  const [Adm, setAdm] = useState(true)
  const [Senha, setSenha] = useState("")
  const [Acess, setAcess] = useState(false)
  

  

  return (
    <>
      {
        Acess?
          <>
            {
              Adm? <Confirmed onPage={setAdm}/> : <Generate onCancel={setAdm}/>
            }
          </>
          :
          <Login  permision={setAcess}/>
      }
    </>
  )


}

export default Admin