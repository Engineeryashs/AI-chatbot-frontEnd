import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme,ThemeProvider } from '@mui/material'
import { HashRouter } from 'react-router-dom'
import { AuthProvider } from './context/Auth-Context.tsx'
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:4000/api/v1";
axios.defaults.withCredentials = true;
const theme=createTheme({
  typography:{
    fontFamily:"Roboto Slab,serif",
    allVariants:{color:"white"}
  },
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <HashRouter>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    </HashRouter>
    </AuthProvider>
  </StrictMode>,
)
