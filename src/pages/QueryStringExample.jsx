// src/pages/QueryStringExample.jsx

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'

function QueryStringExample(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [place, setPlace] = useState("");
    const [destType, setDestType] = useState("");


    // Get the values from the URL query strings 
    // Example: http://localhost:5173/example?place=Miami&destType=Hotel
    const placeParams = searchParams.get("place");
    const destTypeParams = searchParams.get("destType");


    useEffect(() => {
        console.log('place', placeParams)
        console.log('destType', destTypeParams);
    }, [searchParams]);

    return (
        <div>
            <h2>Query String Example</h2>
            <p>
                Open the console to see the logged query string values
            </p>
            <label>Place</label>
            <input onChange={(e) => setPlace(e.target.value)} type="text" />
            <label>Dest Type</label>
            <input onChange={(e) => setDestType(e.target.value)} type="text" />
            <button onClick={() => setSearchParams(`place=${place}&destType=${destType}`)}>🔎</button>
        </div>
    )
}

export default QueryStringExample;
