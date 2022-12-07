import isoTipo from '../assets/images/isotipo_novetech_branco.png'
import ButtonMain from './ButtonMain'
import {FaServer} from "react-icons/fa";
import {Esus, Server, Atend} from '../assets/images'

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
            <ButtonMain name='E-SUS PEC' src={Esus}/>
            <ButtonMain name='ATEND INDICADORES' src={Atend} />
            <ButtonMain name='SERVIDORES' src={Server}/>
        </div>
        </>
    )
}

export default Menu