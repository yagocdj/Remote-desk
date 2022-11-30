import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../css/navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Navbar</a>
                <GiHamburgerMenu />
            </div>
        </nav>
    )

}

export default Navbar;
