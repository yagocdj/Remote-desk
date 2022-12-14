import '../css/buttonMain.css';
import {FaExternalLinkAlt} from "react-icons/fa";


function ButtonMain({name, sourceImage, idIcon}) {
    return (
        <button className="buttonMain">
            <img className='logoButton' src={sourceImage} id={idIcon}/>
            <span className="label text-dark">{name}</span>
            <span className="icon">
                <FaExternalLinkAlt />
            </span>
        </button>
    );
}

export default ButtonMain;