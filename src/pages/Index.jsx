// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// CSS
import '../css/index.css';

// Components
import ButtonMain from '../components/ButtonMain';

// Assets
import isoTipo from '../assets/images/isotipo_novetech_branco.png';
import Esus from '../assets/images/ESUS.png';
import Server from '../assets/images/server.svg';
import Atend from '../assets/images/ATEND.png';

function Index() {
    return (
        <>
            <main className='container d-flex justify-content-center flex-column pt-5 gap-2'>
                <div className='mb-3'>
                    <div className='d-flex justify-content-center'>
                        <img id='isotipoBranco' src={isoTipo} alt='Logotipo da empresa Novetech'></img>
                    </div>
                    <p className='pt-4 fw-light text-center justify-content-center fs-5'>
                        Selecione uma das opções abaixo:
                    </p>    
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    { /* Colocar um alt nas imgs dos buttons */ }
                    <ButtonMain name='E-SUS PEC' sourceImage={Esus} idIcon='Esus' />
                    <ButtonMain name='ATEND INDICADORES' sourceImage={Atend} idIcon='Atend'/>
                    <ButtonMain name='SERVIDORES' sourceImage={Server} idIcon='Server' />
                </div>
            </main>
        </>
    );
}

export default Index;