import { X } from 'phosphor-react'
import React from 'react'

interface PresentProps {
  onCancel: (arg: any) => void
}

function Presentes({ onCancel }: PresentProps) {
  return (

    <div
      className='absolute flex justify-center items-center bg-[#00000075] top-0 left-0 w-full h-screen z-20'
    >
      <div className='bg-lavand200 w-5/6 h-auto pb-4 rounded-md flex flex-col items-center'>
        <div
          className='w-full bg-lavand300 flex p-2 justify-between items-center'

        >
          <h1 className='text-xl flex-1 text-zinc-800'>Litas de Presentes</h1>

          <div
            className='rounded-full bg-lavand600 p-2'
            onClick={() => onCancel({ show: false })}
          >
            <X size={30} weight="bold" />
          </div>
        </div>
        <div className='w-[90%] mt-3 text-zinc-800 overflow-hidden rounded-md h-[60px] bg-lavand300 flex justify-between items-center'>
          <div className='text-1xl ml-2 flex-1'>{"Casas Gonçalves ( magazine)"}</div>
        </div>
        <div className='w-[90%] mt-3 text-zinc-800 overflow-hidden rounded-md h-[60px] bg-lavand300 flex justify-between items-center'>
          <div className='text-1xl ml-2 flex-1'>{"NSP"}</div>
        </div>
        <div className='w-[90%] mt-3 text-zinc-800 h-auto rounded-md p-2 bg-lavand300 flex flex-col justify-between items-center'>
          <div className='text-1xl ml-2 flex-1'>PIX</div>
          <div className='text-2xl ml-2 flex-1'>83993033884</div>
          <div className='text-1xl ml-2 flex-1'>Angelo Santiago Ferreira Duarte</div>
        </div>


      </div>
    </div>
  )
}

export default Presentes