import { Form } from '@unform/web'
import { ArrowLeft, ArrowsCounterClockwise, WhatsappLogo } from 'phosphor-react'
import { useRef, useState } from 'react'
import Fundo from './components/Fundo'
import Input from './components/Input'


interface GenerateProps {
  onCancel: (arg: boolean) => void
}
function Generate({ onCancel }: GenerateProps) {
  const [Names, setNames] = useState<String[]>([])
  const formRef = useRef(null)
  const NameFormeSubmit = (data: any, { reset }: any) => {
    setNames([...Names, data.name])
    reset()

  }
  return (
    <div className='w-full h-screen bg-azul'>
      <div className='w-full h-screen bg-azul flex flex-col'>
        <Fundo />
        <div className='w-full h-[40px] mt-3 ml-3' >
          <ArrowLeft onClick={() => onCancel(true)} size={26} weight="bold" className='text-zinc-800' />
        </div>
        <div
          className='w-full p-6 text-white'
        >

          <Form ref={formRef} onSubmit={NameFormeSubmit} className="flex flex-col my-4">
            <Input name="name" type="name" placeholder="Nome" className="pl-2 rounded-md w-full h-[40px] text-black" />
            <button type="submit" className='w-full my-4 bg-marinho h-[40px] rounded-md active:bg-rosa text-white'>Adicionar</button>
          </Form>
          {

            Names.length > 0 && <div className='text-md w-full bg-marinho p-3'>
              <span>
                {`https://convite-lavic.vercel.app/${encodeURI(Names.join("-"))}`}
              </span>
              <div className='w-full flex'>
                <a href={`whatsapp://send?text=Olá, Você acaba de receber um convite de *Lavic ruan*, Acesse o link para conferir: https://convite-lavic.vercel.app/${encodeURI(Names.join("-"))}`}>

                  <div className='flex-1 flex m-2 bg-rosa text-marinho rounded-md p-2 justify-center items-center'>
                    <WhatsappLogo size={30} />
                    <span>Compartilhar</span>
                  </div>
                </a>
                <div
                  className='flex-1 flex m-2 bg-rosa text-marinho rounded-md p-2 justify-center items-center'
                  onClick={()=> setNames([])}
                >
                  <ArrowsCounterClockwise size={30} />
                  <span>Resetar</span>
                </div>
              </div>
              <div className='m-3 text-2xl w-full'>{Names.map((item, index) => <div key={index}>{item}</div>)}</div>
            </div>
          }
        </div>

      </div>
    </div>
  )
}

export default Generate