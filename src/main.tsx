// tomer-shomron-324205145-omer-hasid-322994120

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Board from './Board/Board.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Board />
  </StrictMode>,
)
