import { Info } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { onList } from './utils/apiFire'

interface ConfirmedProps{
  onPage: (arg: boolean)=> void
}
function Confirmed({onPage}: ConfirmedProps) {
  const [ListConfirm, setListConfirm] = useState<any[]>([])
  useEffect(() => {

    const getList = async () => setListConfirm(await onList())
    getList()
    console.log(ListConfirm)

  }, [])

  return (
    <div className='w-full h-screen bg-azul flex flex-col justify-center items-center text-zinc-800 select-none'>
      <div className='flex flex-col h-1/6 justify-center items-center'>
       
        <div className='w-[90%] mb-3 bg-marinho text-white rounded-md p-2 flex justify-around items-center'>
          <Info size={40}/> veja abaixo todas a pessoas que confirmaram presença em seu aniversário
        </div>
        
      </div>
      <div
        className='w-[90%] flex max-h-[70%] overflow-scroll flex-col h-1/2 bg-rosa rounded-md p-2 flex-1'
      >
        <div className='text-2xl h-auto text-marinho p-2 w-full'>Confirmados</div>
        {
          ListConfirm.map((item: any, index: any) => <div className='w-full h-[30px] rounded-md bg-marinho my-1' key={index}>{item.nome}</div>)
        }
      </div>
      <div className='flex flex-col p-3 pb-5 justify-center items-center'>
        
        <button 
        className='bg-marinho text-white rounded-md p-3 text-xl'
        onClick={()=> onPage(false)}
        >
         gerar novo convite
        </button>
      </div>


    </div>
  )
}

export default Confirmed