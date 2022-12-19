// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Components
import Waves from './components/Waves'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import Index from './pages/Index';

// CSS and assets
import './css/index.css';

function App() {

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* index */}
      <Outlet />
    </>
  );
}

export default App
