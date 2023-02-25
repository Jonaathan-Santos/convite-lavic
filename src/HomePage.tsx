import { CalendarCheck, Clock, MapPin } from 'phosphor-react'
import { useState } from 'react'
import Confirm from './components/Confirm'
import Fundo from './components/Fundo'
import Horario from './components/Horario'
import Local from './components/Local'




function HomePage() {

  interface popapType {
    show: boolean
    item: number
  }

  const [Popup, setPopup] = useState<popapType>({ show: false, item: 0 })
  const popups = [
    {
      name: "horario",
      desc: "Horários",
      component: () => <Horario onCancel={setPopup} />,
      icon: () => <Clock size={50} className="text-rosa" weight="bold" />
    },
    {
      name: "local",
      desc: "Local",
      component: () => <Local onCancel={setPopup} />,
      icon: () => <MapPin size={50} className="text-rosa" weight="bold" />
    },
    {
      name: "confirm",
      desc: "Confirmação",
      component: () => <Confirm onCancel={setPopup}/>,
      icon: () => <CalendarCheck size={50} className="text-rosa" weight="bold" />
    },
    

  ]


  





  return (
    <div
      className="w-full h-auto min-h-screen bg-azul flex flex-col md:flex-row relative"
    >
      <audio autoPlay src="./musica.mp3">
     </audio>
     <Fundo/>
      {
        Popup.show && popups[Popup.item].component()
      }
      <div className='w-full max-h-1/2 md:h-full  flex flex-col md:w-1/2  overflow-hidden items-center relative'>

        <svg
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className='w-full  -translate-y-10'
        >
          <defs>
            <clipPath id="blob">
              <path fill="#474bff" d="M377,342Q306,444,178,411Q50,378,72.5,256Q95,134,201.5,83Q308,32,378,136Q448,240,377,342Z" />
            </clipPath>
          </defs>
          <image x="70" y="65" width="72%" height="90%" clip-path="url(#blob)" xlinkHref="./lavic.jpeg" preserveAspectRatio="xMidYMid slice"></image>
        </svg>
        <div className='w-[80%] h-[160px] -translate-y-[120px] text-rosa flex items-center justify-center flex-col fundo '>

          <span className='text-6xl font-principal  '>
            Lavic
          </span>
          <div className='text-6xl font-principal   flex'>
            <span>Ruan</span>
          </div>
        </div>

      </div>
     
      <div className='text-white text-xl mb-1 -translate-y-[100px]'>
        Dia <span className='text-marinho text-4xl'>02</span> de <span className='text-marinho text-4xl'>Março</span> de <span className='text-marinho text-4xl'>2023</span>
      </div>
      <div className='flex w-full mt-3 text-marinho -translate-y-[90px]'>
        {
          popups.map((item, index) =>
            <div
              className='flex-1 h-[50px]  text-white text-xl flex flex-col items-center'
              onClick={() => { console.log(Popup); setPopup({ show: true, item: index }) }}
            >
              <div className='rounded-full bg-marinho text-rosa p-2'>
                {item.icon()}
              </div>
              {item.desc}
            </div>)
        }

      </div>
    </div>

  )
}

export default HomePage