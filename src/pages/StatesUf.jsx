import '../css/card.css';
import '../css/statesuf.css';
import { useState } from 'react';
import { TextField } from '@mui/material';
import CardsList from '../components/CardsList';


export default function StatesUf() {
    
    const [inputText, setInputText] = useState("");

    let inputHandler = (text) => {
        // convert input text to lower case
        let lowerCase = text.target.value.toLowerCase();
        setInputText(lowerCase);
    }

    return (
        <>
            <div id='search-bar-container' className='d-flex justify-content-center py-4'>
                <div className='search'>
                    <TextField
                    id='outlined-basic-error-helper'
                    onChange={inputHandler}
                    variant='outlined'
                    fullWidth
                    label='Nome do estado'
                    />
                </div>
            </div>
            
            <main id='cards-container' className='px-4 align-self-center'>
                <CardsList input={inputText}/>
            </main>
        </>
    );
}