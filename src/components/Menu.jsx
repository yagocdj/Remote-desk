import isoTipo from '../assets/images/isotipo_novetech_branco.png'
import ButtonMain from './ButtonMain'
import Esus from '../assets/images/ESUS.png'
import Server from '../assets/images/server.svg'
import Atend from '../assets/images/ATEND.png'

function Menu(){
    
    return (
        <>
        <div className='mb-3'>
            <div className='d-flex justify-content-center'>
                <img id='isotipoBranco' src={isoTipo} alt='Logotipo da empresa Novetech'></img>
            </div>
            <p className='pt-3 fw-light text-center justify-content-center'>
                Selecione uma das opções abaixo:
            </p>    
        </div>
        <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
            <ButtonMain name='E-SUS PEC' sourceImage={Esus} idIcon='Esus' />
            <ButtonMain name='ATEND INDICADORES' sourceImage={Atend} idIcon='Atend'/>
            <ButtonMain name='SERVIDORES' sourceImage={Server} idIcon='Server' />
        </div>
        </>
    )
}

export default Menu