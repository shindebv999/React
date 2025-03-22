import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { incrementCount,decrementCount } from "../ActionReducer/UserAction";

export default function IncremenDecrementCon () {
    const dispatch = useDispatch();

    const data = useSelector( ( state ) => state.counter );
    const incrementCounter = () => {
        dispatch( incrementCount() );
    }
    const decrementCounter = () => {
        dispatch( decrementCount() )
    }
    return (
        <>
            <h3>Hello {data} </h3>
            <button onClick={incrementCounter}>Increment counter</button>
            <button onClick={decrementCounter}>Decrement counter</button>
        </>
    )
}