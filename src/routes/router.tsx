import { createBrowserRouter } from 'react-router-dom'
import Layout from './../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Headphones from './../pages/Headphones'
import Speakers from '../pages/Speakers'
import Earphones from './../pages/Earphones'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'headphones',
        element: <Headphones />
      },
      {
        path: 'speakers',
        element: <Speakers />
      },
      {
        path: 'earphones',
        element: <Earphones />
      }
    ]
  }
])

export default router
