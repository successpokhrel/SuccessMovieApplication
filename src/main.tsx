import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SingleMovie from './pages/SingleMovie.tsx'
import CustomNavbar from './components/CustomComponents/CustomNavbar.tsx'
import LoginPage from './pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomNavbar/>,
    children:[
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/:movieId',
        element: <SingleMovie/>
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
