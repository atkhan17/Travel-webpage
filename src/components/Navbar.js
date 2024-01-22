import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  /*
  useEffect(() => {
    showButton();
  }, []);
  */

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
            Traveller <i className="fa-solid fa-compass"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick} >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className="nav-item">
              <Link 
                to='/' 
                className="nav-links" 
                onClick={closeMobileMenu} >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to='/about' 
                className="nav-links" 
                onClick={closeMobileMenu} >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to='/services' 
                className="nav-links" 
                onClick={closeMobileMenu} >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to='/sign-up' 
                className="nav-links-mobile" 
                onClick={closeMobileMenu} >
                Contact Us
              </Link>
            </li>
          </ul>
          {(window.innerWidth > 960 && button) && <Button buttonStyle='btn--outline'>Contact Us</Button>}
        </div>
      </nav>
    </>
  )
}

export default NavBar