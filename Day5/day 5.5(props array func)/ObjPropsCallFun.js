import React from 'react';

export default function MyObjCall(props){
console.log(props);

return(
    <>
           <h1> This is child function</h1>
     <ul>
        <li> {props.MyObj.emp_name}</li>
        <li> {props.MyObj.job_Profile}</li>
        <li>{props.MyObj.age}</li>
    </ul>
         
    </>
)
}