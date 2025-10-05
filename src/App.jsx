import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import './app.css'
import NavBar from "./components/navbar/Navbar.jsx"
import { useState } from 'react'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: 'tajawal, sans-serif',
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} handleDarkMode={handleDarkMode} />
      </div>

    </ThemeProvider>
  )
}

export default App