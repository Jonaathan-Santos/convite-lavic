import { MapTrifold, X } from 'phosphor-react'

interface LocalProps {
  onCancel: (arg: any) => void
}
function Local({ onCancel }: LocalProps) {
  return (

    <div
      className='absolute flex justify-center items-center bg-[#00000075] top-0 left-0 w-full h-screen z-20'
    >
      <div className='bg-azul overflow-hidden w-5/6 pb-6 rounded-md flex flex-col items-center'>
        <div
          className='w-full bg-marinho flex p-2 justify-between items-center'

        >
          <h1 className='text-xl flex-1 text-white'>Locais</h1>

          <div
            className='rounded-full bg-rosa text-marinho p-2'
            onClick={() => onCancel({ show: false })}
          >
            <X size={30} weight="bold" />
          </div>
        </div>


        <div className='w-full h-[60px] flex justify-center '>

          <div className='w-[90%] h-full text-zinc-800 overflow-hidden rounded-md mt-2 mb-2  bg-rosa flex justify-between items-center'>
            <div className='ml-2 flex-1 flex flex-col'>
              <span className='text-1xl'>Chácara de Railson</span>

            </div>
            <div className='w-[25%] bg-marinho text-white flex flex-col justify-center items-center h-full '>
              <span className='text-3xl'>
              <MapTrifold size={28} weight="bold" />
              </span>

            </div>
          </div>
        </div>
        


      </div>
    </div>

  )
}

export default Local