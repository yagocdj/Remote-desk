import '../css/buttonMain.css';
import {FaExternalLinkAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function ButtonMain({name, sourceImage, idIcon, route}) {
    return (
        <Link to={route} className="text-decoration-none">
            <button className="buttonMain" type='button'>
                <img className='logoButton' src={sourceImage} id={idIcon}/>
                <span className="label text-dark">{name}</span>
                <span className="icon">
                    <FaExternalLinkAlt />
                </span>
            </button>
        </Link>
    );
}
