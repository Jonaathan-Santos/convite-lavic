import { Form } from '@unform/web'
import { useRef } from 'react'
import Fundo from './components/Fundo'
import Input from './components/Input'

function Login({ permision }: any) {

  const key = "1234"

  const formRef = useRef(null)
  const handleFormSubmit = (data: any, { reset }: any) => {

    if (data.senha == key) {

      permision(true)

    } else {
      window.alert("Senha incorreta!")
      reset()
    }
  }

  return (
    <div className='w-full  h-screen bg-azul flex flex-col'>
      <Fundo />
      <div
       className='w-full p-6 justify-self-center self-center'
      >


        <span className='text-md'>digite a senha para cessar area de adiministrador</span>
        <Form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col my-4">
          <Input name="senha" type="password" placeholder="senha" className="pl-2 rounded-md w-full h-[40px]" />
          <button type="submit" className='w-full my-4 bg-marinho h-[40px] rounded-md active:bg-rosa text-white'>Acessar</button>
        </Form>
      </div>

    </div>
  )
}

export default Login