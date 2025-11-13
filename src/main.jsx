import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootProvider from './provider/RootProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import "aos/dist/aos.css"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootProvider>
      <RouterProvider router={router}></RouterProvider>
    </RootProvider>
  </StrictMode>,
)
