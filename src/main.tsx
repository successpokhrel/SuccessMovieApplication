import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SingleMovie from './pages/SingleMovie.tsx'
import CustomNavbar from './components/CustomComponents/CustomNavbar.tsx'
import LoginPage from './pages/LoginPage'
import Favorites from './pages/Favorites.tsx'
import Watchlists from './pages/Watchlists.tsx'
import Check from './pages/Check.tsx'


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
        path: '/check',
        element: <Check />
      },
      {
        path: '/:movieId',
        element: <SingleMovie/>
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/watchlist',
        element: <Watchlists />
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
