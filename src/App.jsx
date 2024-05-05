
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { listen } from "./redux/listener.js"
import { useEffect } from 'react'
// Component

import { AppRoutes } from "./routes"


function App() {

  useEffect(() => {
    listen()
  }, [])

  return (
    <BrowserRouter>

      <AppRoutes />

    </BrowserRouter>
  )
}

export default App
