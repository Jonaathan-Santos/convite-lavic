import { useParams } from 'react-router-dom'
import Fundo from './components/Fundo'


interface CapaProps {
  onOpem: (arg: boolean) => void
}



function Capa({ onOpem }: CapaProps) {


  const names = useParams()

  return (
    <div className='w-full bg-azul h-screen p-4 text-zinc-800 flex flex-col items-center'>

      <Fundo/>

      <span
        className='text-2xl text-white mt-6 mb-6'
      >
        De:
      </span>
      <span
        className='text-8xl self-start text-rosa font-strok mb-6'
      >
        Lavic
      </span>
      <span
        className='text-8xl self-end text-rosa font-strok mb-6'
      >
        Ruan
      </span>

      <span
      className='text-2xl text-white mb-4'
      >
        Para:</span>
      <div className='bg-rosa rounded-md text-marinho text-2xl w-full flex flex-col mb-6'>
        {names.names?.split("-").map((name) => <div>{name}</div>)}
      </div>

      <div
        onClick={() => onOpem(true)}
        className="rounded-full text-lavand200 w-[60px] h-[60px] bg-marinho flex justify-center items-center mt-3"
      >
        abrir
      </div>
    </div>
  )
}

export default Capa