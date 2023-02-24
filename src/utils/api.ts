import axios from "axios";

export interface ConvidadoList{
  id: string;
  nome: string
}
const api = axios.create({
  baseURL: 'https://convite-server-production.up.railway.app'
})

export async function onConfirm (nome: string){
  const confirmName = await  api.post('/confirm', {nome})
  console.log(confirmName)

  

    localStorage.setItem("confirmStorage", JSON.stringify({confirm: true}))
  
}

export async function onList (){
  const confirmName = await  api.get('/confirm')

  return confirmName.data
}





