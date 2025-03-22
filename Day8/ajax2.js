import React from "react";
import JsonData from './data.json'
export default function AllRecords1()
{
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }
    )
return(
    <>
    <table>
        <tr>
             
             <th>id</th>
             <th>Name</th>
             <th>City</th>
             
        </tr>
        <tbody>
                 
                    
                 {DisplayData}
                 
             </tbody>
    </table>

    
    </>
)
}