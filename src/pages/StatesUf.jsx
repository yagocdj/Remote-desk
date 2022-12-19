import Card from '../components/Card';
import '../css/card.css';
import '../css/statesuf.css';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';


export default function StatesUf() {

    const [flags, setFlags] = useState([]);
    const [inputText, setInputText] = useState("");

    let inputHandler = (text) => {
        // convert input text to lower case
        let lowerCase = text.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    useEffect(() => {
        fetch('http://localhost:3000/stateFlags')
        .then((answer) => answer.json())
        .then((flags) => setFlags(flags))}, []);

    return (
        <>
            <div id='search-bar-container' className='d-flex justify-content-center py-4 text-dark'>
                <div className='search'>
                    <TextField
                    id='outlined-basic-error-helper'
                    onChange={inputHandler}
                    variant='filled'
                    fullWidth
                    label='Digite o Estado ou UF aqui'
                    />
                </div>
            </div>
            
            <main id='cards-container' className='px-4 align-self-center mb-4'>
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