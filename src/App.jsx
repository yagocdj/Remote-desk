import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Index from './pages/Index';
import { Outlet } from 'react-router-dom';
import './css/navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from './assets/images/novetech_logo_branco.png';

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
              <img className='logoBranca' src={Logo}></img>
          </a>
          <GiHamburgerMenu size={25} />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App
