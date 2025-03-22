import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allRecords } from "../ActionReducer/employeeActions";
export default function AllRecords () {
    // const [data1,setData]=React.useState([])
    const dispatch = useDispatch();
    const data = useSelector( ( state ) => state.allEmps );
    const getAll = () => {
        // axios.get( 'http://localhost:8080/employees/' ).then( res => setData(res.data)   )
           axios.get( 'http://localhost:8080/employees' ).then( res =>{ dispatch(allRecords(res.data))}  )
    }
    return (
        <>
            <button onClick={getAll}>All Records</button>
            <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Satrt date</th> 
                </tr>
                </thead>
                {data.map ( (item )=> {
                    return (
                        
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.firstName} {item.lastName}</td>
                            <td>{item.age}</td>
                            <td>{item.startDate}</td>  
                        </tr>
                    
                    )
                } )}
            </table>
        </>
    )
}