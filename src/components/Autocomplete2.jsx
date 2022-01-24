import React from 'react'
import Autocomplete from "react-google-autocomplete";
import { GOOGLE_API_KEY } from '../config/config';

export default function Autocomplete2() {
    return (
        <div>
            <Autocomplete
                apiKey={GOOGLE_API_KEY}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
            />
        </div>
    )
}
