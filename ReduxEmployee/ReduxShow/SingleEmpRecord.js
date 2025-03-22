import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { singleEmployee } from "../ActionReducer/employeeActions";
export default function SingleRecord () {
    const dispatch = useDispatch();
    const emp = useSelector( ( state ) => state.emp );
    const get = () => {
        axios.get( 'http://localhost:8080/employees/id/1' ).then( res => { dispatch( singleEmployee( res.data ) ) } )
    }
    return (
        <>
            <button onClick={get}>Get record for id 1</button>
            <h3>{emp.id} {emp.firstName} {emp.age}</h3>
        </>
    )
}