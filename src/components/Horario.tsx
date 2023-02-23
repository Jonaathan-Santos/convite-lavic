import { X } from 'phosphor-react'

interface HoraioProps {
  onCancel: (arg: any) => void
}

function Horario({ onCancel }: HoraioProps) {
  return (

    <div
      className='absolute flex justify-center items-center bg-[#00000075] top-0 left-0 w-full h-screen z-20'
    >
      <div className='bg-azul overflow-hidden w-5/6 pb-6 rounded-md flex flex-col items-center'>
        <div
          className='w-full bg-marinho flex p-2 justify-between items-center'

        >
          <h1 className='text-xl flex-1 text-white'>Horários</h1>

          <div
            className='rounded-full bg-rosa text-marinho p-2'
            onClick={() => onCancel({ show: false })}
          >
            <X size={30} weight="bold" />
          </div>
        </div>
        <div className='w-[90%] text-marinho overflow-hidden rounded-md mt-6 mb-2 h-[60px] bg-rosa flex justify-between items-center'>
          <div className='text-3xl ml-2 flex-1'>17:00</div>
          <div className='w-[25%] bg-marinho text-white flex flex-col justify-center items-center h-full '>
            <span className='text-3xl'>hrs</span>
            
          </div>
        </div>
        



      </div>
    </div>

  )
}

export default Horario