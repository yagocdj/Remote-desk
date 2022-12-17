import '../css/card.css';

export default function GlassCard({id, stateName, image, abbreviation, altText}) {
    return (
        <div className="card mt-5 card-container px-4 align-self-center" id={id}>
            <div className='card-image pt-4'>
                <img src={image} alt={altText} className='flag-image'/>
            </div>
            <div className='card-description text-center my-4'>
                <h3>{stateName} - {abbreviation}</h3>
            </div>
        </div>
    );
}
