import isoTipo from '../assets/images/isotipo_novetech_branco.png'
import '../css/body.css'

function Body(){
    return (
        <div className='container'>
            <span>
                <img id="isotipoBranco"src={isoTipo}></img>
            </span>
        </div>
    )
}

export default Body