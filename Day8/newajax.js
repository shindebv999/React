import React, { useEffect } from "react";
import './ajax.module.css';

export default function Newajax(){
    const[data,setData]=React.useState();
    useEffect(()=>{
        const xhttp=new XMLHttpRequest();
        xhttp.onload=function(){
        let obj=JSON.parse(this.responseText);
            console.log(obj.user);
            setData( obj.users );
        }
        xhttp.open( "GET", "https://jsonplaceholder.typicode.com/users" );
        xhttp.send();
    },[])
    return(
       
    
        <table>
        <thead>
        <tr>
          
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Email Id</th>
            <th>Date of Birth</th>
            <th>Address</th>
            
        </tr>
        </thead>
        {data && data.map((user,index)=>
        {
            return(
                <tbody key={index}>
            <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td> 
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.birthDate}</td>
                <td>{user.address.city}</td>
               
            </tr>
            </tbody>
            )
        })}

        </table>
     )   
        
}

//console.log(typeof(this.responseText)); check data format string or object