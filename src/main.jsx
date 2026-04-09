import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Rout from './router/Index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rout />
  </StrictMode>,
)
