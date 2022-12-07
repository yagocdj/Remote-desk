import Menu from './Menu';
import Waves from './Waves'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../css/body.css'

function Body(){
    return (
        <>
        <main className='container d-flex justify-content-center flex-column pt-5'>
            <Menu />
        </main>
        <footer>
            <Waves />
        </footer>
        </>
    )
}

export default Body