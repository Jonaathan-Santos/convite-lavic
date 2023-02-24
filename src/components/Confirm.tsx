import { X } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { onConfirm } from '../utils/api'

interface confirmProps {
  onCancel: (arg: any) => void
  onStorageConfirm: (arg: any) => void


}
function Confirm({ onCancel, onStorageConfirm }: confirmProps) {

  const [confirm, setConfirm] =  useState(false)

  const params = useParams()

  const names = params.names ? params.names.split("-") : [""]
  const nameArg = params.names ? params.names : ""


  useEffect(() => {
    if(!localStorage.getItem("confirmStorage")){
      return
    }else{
      setConfirm(true)
    }
  
  }, [])



  return (
    <div
      className='absolute flex justify-center items-center bg-[#00000075] top-0 left-0 w-full h-screen z-20 text-white'
    >
      <div className='bg-azul overflow-hidden w-5/6 pb-6 rounded-md flex flex-col items-center text-white'>
        <div
          className='w-full bg-marinho flex p-2 justify-between items-center text-white'

        >
          <h1 className='text-xl flex-1 '>Confirmação de presença</h1>

          <div
            className='rounded-full bg-rosa p-2 text-marinho'
            onClick={() => onCancel({ show: false })}
          >
            <X size={30} weight="bold" />
          </div>
        </div>
        <div className='w-full mt-2 text-xl text-zinc-800 flex flex-col items-center'>
          {
            !confirm ?
              <>
                
                <div className='bg-rosa mt-2 rounded-md text-marinho w-[80%] flex flex-col items-center'>

                  {names.map((name) => <div>{name}</div>)}
                </div>
                <button
                  className='bg-marinho text-white rounded-md p-2 w-[80%] mt-2'
                  onClick={async () => { await onConfirm(nameArg) }}

                >
                  Confirmar
                </button>
              </> : <span>Sua prsença foi confirmada confirmada!</span>

          }
        </div>

      </div>
    </div>
  )
}

export default Confirm