import Head from "./components/Head"
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {

  return (
    <Provider store={appStore}>
      <>
        <Head />
        <Outlet />
      </>
    </Provider>
  )
}


export default App
