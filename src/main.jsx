import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
// import './index.css'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      }
      ,
      {
        path:"/restaurant/:restID",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)