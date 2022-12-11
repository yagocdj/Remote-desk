import Menu from '../components/Menu';
import Waves from '../components/Waves'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../css/body.css'

function Index(){
    return (
        <>
            <main className='container d-flex justify-content-center flex-column pt-5 gap-2'>
                <Menu />
            </main>
            <footer>
                <Waves />
            </footer>
        </>
    )
}

export default Index