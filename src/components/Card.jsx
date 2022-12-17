import '../css/card.css';

export default function GlassCard({id, stateName, image, abbreviation, altText}) {
    return (
        <div className="card mt-5 card-container px-4 align-self-center" id={id}>
            <img src={image} alt={altText} className='flag-image'/>
            <h3>{stateName}</h3>
            <span>{abbreviation}</span>
        </div>
    );
}
