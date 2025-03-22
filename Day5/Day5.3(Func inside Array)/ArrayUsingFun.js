import React from 'react';

export default function MyArray(){

    const [myArr]=React.useState(["riya","siya","Sndhya","Aarti","Priynka"]);
   
    return(
        <>
        <h1>This is Employee List :--</h1>
        <ul>
            {
                myArr.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
        </>
    )
}