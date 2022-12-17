
import { useRouteError } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import Waves from "../components/Waves"

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// CSS and assets
import '../css/navbar.css';
import Logo from '../assets/images/novetech_logo_branco.png';
import '../css/error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

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

      <main className="container d-flex justify-content-center">
        <div id="error-page" className="text-center align-self-center">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred 😔.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </main>

      <footer>
        <Waves />
      </footer>
    </>
  );
}