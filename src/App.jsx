import { useState } from "react"
import EditableUserView from "./components/EditableUserView"
import UserForm from "./components/UserForm"

function App() {
  const [userData,setUserData] = useState(null)

  return (
    <>
     
      {
        userData?(
          <EditableUserView user={userData}/>
        ):(
          <UserForm onSave={(data)=>setUserData(data)} />
        )
      }
    </>
  )
}

export default App
