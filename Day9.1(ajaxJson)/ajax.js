import React, { useEffect } from "react";

export default function AllRecords () {
    const [ data, setData ] = React.useState();
    useEffect( () => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            let obj = JSON.parse( this.responseText );
            console.log( obj.users );
            setData( obj.users );
        }
        xhttp.open( "GET", "https://dummyjson.com/users" );
        xhttp.send();
    }, [] )
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>UserName</th>
            </tr>
            {data && data.map( ( user, index ) => {
                return (
                    <tr>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.username}</td>
                    </tr>
                )
            } )}
        </table>
    )
}