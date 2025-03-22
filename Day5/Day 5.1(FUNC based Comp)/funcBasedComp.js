import React from 'react';

export default function MyFunc(){
 const [FName]=React.useState('Sandhya');
 const[LName]=React.useState('Roy');


    return(
        <>
        <h1>HELLO..{FName} {LName}</h1>
        
        </>
    )
}