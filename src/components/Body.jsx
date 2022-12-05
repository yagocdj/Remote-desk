import isoTipo from '../assets/images/isotipo_novetech_branco.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../css/body.css'

function Body(){
    return (
        <main className='container d-flex justify-content-center flex-column pt-5'>
            <div className='d-flex justify-content-center'>
                <img id='isotipoBranco'src={isoTipo} alt='Logotipo da empresa Novetech'></img>
            </div>
            <p className='pt-3 fw-light txt-center'>
                Selecione uma das opções abaixo:
            </p>
        </main>
    )
}

export default Body