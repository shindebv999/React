import React from "react";

    export default function ChildClassObjArr(props){
    
       return(
        <>
       <p> {props.myobj.emp_name}-{props.myobj.job_Profile}-{props.myobj.age}</p>
        {
            props.student.map((item,index)=>{
               return(
                <>
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.Name}</td>
                <td>{item.LastName}</td>
                </tr>
                
                </>
               )
            })
        }
        </>
       )
        
    }
