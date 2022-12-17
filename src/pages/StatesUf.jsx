import Card from '../components/Card';
import '../css/card.css';
import '../css/statesuf.css';
import { useEffect, useState } from 'react';


export default function StatesUf() {

    const [flags, setFlags] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/stateFlags')
        .then((answer) => answer.json())
        .then((flags) => setFlags(flags))}, []);

    return (
    <>
        <main id='cards-container' className='px-4 align-self-center'>
            {flags.map((flag) => (
                <Card 
                id={flag.id}
                image={flag.image}
                stateName={flag.name}
                abbreviation={flag.abbreviation}
                altText={flag.alternative}
                />
            ))}
        </main>
    </>
    );
}