import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function CardsList(props) {

    const [flags, setFlags] = useState([]);

    useEffect(() => {
        fetch('http://10.0.4.154:3000/stateFlags')
        .then((answer) => answer.json())
        .then((flags) => setFlags(flags))}, []);

    const filteredData = flags.filter((state) => {
        // if we don't have an input, then return the original array
        if (props.input === '') {
            return state;
        }
        // return the item that contains the user input
        else {
            return state.name.toLowerCase().includes(props.input)
        }

    });

    return (
        <>
            {filteredData.map((flag) => (
                <Card 
                id={flag.id}
                image={flag.image}
                stateName={flag.name}
                abbreviation={flag.abbreviation}
                altText={flag.alternative}
                />
            ))}
        </>
    )
}