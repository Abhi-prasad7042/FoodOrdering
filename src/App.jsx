import Head from "./components/Head"
import { Outlet } from "react-router-dom"
// import useOnlineStatus from "./utils/useOnlineStatus"
// import './App.css'

function App() {

  // const onlineStatus = useOnlineStatus()
  return (
    <>
      <Head />
      <Outlet />
    </>
  )
}


export default App
