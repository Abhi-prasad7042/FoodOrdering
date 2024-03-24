import Head from "./components/Head"
import { Outlet } from "react-router-dom"

// import './App.css'

function App() {

  return (
    <>
      <Head />
      <Outlet />
    </>
  )
}


export default App
