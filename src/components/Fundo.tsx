
function Fundo() {
  return (
    <div
      className="w-full h-screen absolute top-0 -z-0"
    >
      <img
        src="./sol.png"
        alt=""
        className="w-[40%] absolute right-2 top-2 animate-spin-slow"
      />
      <img
        src="./nuvem.png"
        alt=""
        className="w-[40%] absolute top-[200px] animate-pulse-slow"

      />
      <img
        src="./nuvem.png"
        alt=""
        className="w-[50%] absolute right-2 top-[500px] animate-pulse-slow2"

      />

      <div
      className="bg-verde w-full h-[200px] absolute bottom-0 rounded-tr-lg"
      >
        <img
        src="./pepap.png"
        alt=""
        className="w-[100%] absolute bottom-12"

      />

      </div>

    </div>

  )
}

export default Fundo