import {Camera, Trash2, DatabaseZap, Icon} from "lucide-react"
import { bottleBaby, burger } from '@lucide/lab';

function App() {
  return (
    <>
    <Camera color="red" size={72}></Camera>
    <Camera color="blue" size={72}></Camera>
    <Camera color="blue" size={72} strokeWidth={1}></Camera>

    <Trash2  size={65} strokeWidth={1} /> 
    <DatabaseZap size={65} strokeWidth={1}/>
    
    <Icon iconNode={bottleBaby} size={60} strokeWidth={1}></Icon>
    <Icon iconNode={burger} size={60} strokeWidth={1} color="red"> </Icon>
    </>  
  )
}

export default App
