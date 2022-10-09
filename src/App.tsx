import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

const App = () => {
  React.useEffect(() => {
    const year = new Date().getFullYear()
    document.title = `Audiophile Shop | ${year}`
  }, [])

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
