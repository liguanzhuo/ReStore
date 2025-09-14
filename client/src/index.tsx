import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router';
import { router } from './app/router/Routers.tsx';


createRoot(document.getElementById('root')!).render(
  /**
     * <RouterProvider>: Load route rules to React. React can render pages using routes that you create. 
     */
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
