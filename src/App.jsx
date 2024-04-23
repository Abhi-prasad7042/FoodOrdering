import Head from "./components/Head"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Footer from "./components/Footer"

function App() {

  return (
    <Provider store={appStore}>
      <>
        <Head />
        <Outlet />
        <Footer/>
      </>
    </Provider>
  )
}


export default App
