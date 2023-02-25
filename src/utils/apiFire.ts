// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa3wghnMSY0qBKbB5CrfWH0DM-Uy6KjD4",
  authDomain: "convites-d7a00.firebaseapp.com",
  projectId: "convites-d7a00",
  storageBucket: "convites-d7a00.appspot.com",
  messagingSenderId: "295723605925",
  appId: "1:295723605925:web:5583c90f5408d06897524c",
  measurementId: "G-PFT6R61X84"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)



async function onConfirm (nome: string){

  try {
    
    const docRef = await addDoc(collection(db, "BFfGTJUbloeskGsy3cxzSvseX7s1"),{nome})

    localStorage.setItem("confirmStorage", JSON.stringify({confirm: true}))
  } catch (error) {
    
    console.log("não confirmou!", error)
  }

}

async function onList (){
  let confirmName: any[] = []

  try {
    const querySnapshot = await getDocs(collection(db, "BFfGTJUbloeskGsy3cxzSvseX7s1"))

    querySnapshot.forEach((doc: any) => confirmName.push( doc.data()))
    console.log(confirmName)
  } catch (error) {

    console.log(error)
    
  }

  return confirmName
}

export { onConfirm, onList };
