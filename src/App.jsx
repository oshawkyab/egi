import { createTheme, ThemeProvider } from '@mui/material'
import './app.css'
import NavBar from "./components/navbar/Navbar.jsx"


const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'tajawal, sans-serif',
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <div className='App bg-red-900'>
        <NavBar />
      </div>

    </ThemeProvider>
  )
}

export default App