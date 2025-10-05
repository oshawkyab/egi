import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './navbar.css'
// IMPORT IMAGES
import logo from '../../assets/pictures/logo.png'


const NavBar = ({ isDarkMode, handleDarkMode }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="p-2 dark:bg-gray-900 dark:text-white bg-transparent shadow-sm">
      <Container className='flex flex-column gap-y-1'>
        <Navbar.Brand href="#home"><img className='rounded-full' style={{ width: '12rem', height: '50px' }} src={logo} alt="this is logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div className='w-full'>

          <Navbar.Collapse className='flex items-center justify-between w-100' id="responsive-navbar-nav">
            <Nav className='flex items-center justify-start gap-2'>
              <Nav.Link style={{ color: isDarkMode ? 'white' : 'black' }} className='links p-y-2' href="#features">الرئيسية</Nav.Link>
              <Nav.Link style={{ color: isDarkMode ? 'white' : 'black' }} className='links p-y-2' href="#pricing" >التقديم</Nav.Link>
              <Nav.Link style={{ color: isDarkMode ? 'white' : 'black' }} className='links p-y-2' href="#pricing">تسجيل</Nav.Link>

            </Nav>
            <Nav className='flex items-center justify-between gap-4'>
              <Nav.Link style={{ color: isDarkMode ? 'white' : 'black' }} eventKey={2} href="#memes">
                <select name="" className='w-100  bg-transparent outline-0' id="">
                  <option style={{ background: 'transparent' }} className='outline-0' value="ar">العربية</option>
                  <option className='outline-0' value="en">الإنجليزية</option>
                </select>
              </Nav.Link>
              <Nav.Link onClick={handleDarkMode} style={{ backgroundColor: isDarkMode ? "#F3C623" : "#19183B" }} className="p-2 hover:shadow-lg text-white shadow-gray-600 rounded-full transition-all delay-700 duration-700" href="#deets">
                {isDarkMode ? <LightModeIcon className=' h-full scale-100  p-7  duration-1000  transition rounded-full min-h-full' /> : <DarkModeIcon className='transition h-100 rounded-full w-full min-h-full ' />}
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}



export default NavBar