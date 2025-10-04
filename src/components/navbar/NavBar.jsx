import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './navbar.css'

// imports 
import logo from '../../assets/pictures/logo.png'
import { useState } from 'react';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  function handleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="p-2  bg-white shadow-sm">
      <Container className='flex flex-column gap-y-1'>
        <Navbar.Brand href="#home"><img className='rounded-full' style={{ width: '12rem', height: '50px' }} src={logo} alt="this is logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className='w-full'>

          <Navbar.Collapse className='flex items-center justify-between w-100' id="responsive-navbar-nav">
            <Nav className='flex items-center justify-start gap-2'>
              <Nav.Link className='links p-y-2' href="#features">الرئيسية</Nav.Link>
              <Nav.Link className='links p-y-2' href="#pricing">التقديم</Nav.Link>
              <Nav.Link className='links p-y-2' href="#pricing">تسجيل</Nav.Link>

            </Nav>
            <Nav className='flex items-center justify-between gap-4'>
              <Nav.Link eventKey={2} href="#memes">
                <select name="" className='w-100 outline-0' id="">
                  <option className='outline-0' value="en">الإنجليزية</option>
                  <option className='outline-0' value="ar">العربية</option>
                </select>
              </Nav.Link>
              <Nav.Link onClick={handleDarkMode} className='hover:shadow-lg flex items-center justify-center p-0 rounded-full' href="#deets">
                {isDarkMode ? <LightModeIcon className='w-10 h-10 scale-100 hover:bg-orange-400 hover:shadow-amber-600 p-7 hover:text-white duration-1000 transition-all transition rounded-full w-full min-h-full' /> : <DarkModeIcon className='w-full transition h-100 hover:bg-gray-800 hover:text-white duration-1000 transition-all rounded-full w-full min-h-full ' />}
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}



export default NavBar